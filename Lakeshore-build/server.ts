import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Brivity Integration Route
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const apiKey = process.env.BRIVITY_API_KEY;

    if (!apiKey) {
      console.warn("BRIVITY_API_KEY is not set. Lead will not be sent to CRM.");
      return res.status(200).json({ 
        success: true, 
        message: "Message received (Demo mode: API key missing)" 
      });
    }

    try {
      console.log("Attempting to send lead to Brivity...");
      // Brivity Lead Ingestion API
      // Common Brivity API auth format: Token token="YOUR_API_KEY"
      const response = await fetch("https://api.brivity.com/v1/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token token="${apiKey}"`,
          "Accept": "application/json"
        },
        body: JSON.stringify({
          lead: {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            notes: `Lakeshore Village Website Inquiry: ${message}`,
            source: "Lakeshore Village Website",
            type: "Buyer"
          }
        })
      });

      const responseStatus = response.status;
      const responseText = await response.text();

      if (!response.ok) {
        console.error(`Brivity API Error (Status ${responseStatus}):`, responseText);
        return res.status(responseStatus).json({ 
          success: false, 
          message: `Brivity API Error: ${responseStatus}. Please check your API key and permissions.` 
        });
      }

      console.log("Lead successfully sent to Brivity.");
      res.status(200).json({ success: true, message: "Lead successfully sent to Brivity" });
    } catch (error) {
      console.error("Contact Form System Error:", error);
      res.status(500).json({ success: false, message: "A system error occurred while connecting to the CRM." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
