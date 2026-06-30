import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Resend Email Integration Route
  app.post("/api/contact", async (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.status(200).json({
        success: true,
        message: "Message received (Demo mode: API key missing)"
      });
    }

    const resend = new Resend(apiKey);

    try {
      console.log("Attempting to send email via Resend...");
      const { data, error } = await resend.emails.send({
        // The sender email should ideally be a verified domain, but 
        // onboarding@resend.dev works for testing (if the 'to' address is verified in Resend).
        from: "Website Contact Form <onboarding@resend.dev>",
        to: "info@thehalsteadteam.com",
        subject: `New Lead from Lakeshore Village Website: ${firstName} ${lastName}`,
        html: `
          <h3>New Contact Inquiry</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
        `
      });

      if (error) {
        console.error("Resend API Error:", error);
        return res.status(500).json({
          success: false,
          message: `Resend API Error: ${error.message}`
        });
      }

      console.log("Email successfully sent via Resend.");
      res.status(200).json({ success: true, message: "Email successfully sent" });
    } catch (error) {
      console.error("Contact Form System Error:", error);
      res.status(500).json({ success: false, message: "A system error occurred while sending the email." });
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
