<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

$firstName = $input['firstName'] ?? '';
$lastName = $input['lastName'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$message = $input['message'] ?? '';

if (empty($firstName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Please fill in all required fields."]);
    exit();
}

// Destination email address
$to = "info@thehalsteadteam.com";

// Subject
$subject = "New Lead from Lakeshore Village Website: $firstName $lastName";

// Message body
$body = "
<html>
<head>
  <title>New Contact Inquiry</title>
</head>
<body>
  <h3>New Contact Inquiry</h3>
  <p><strong>Name:</strong> " . htmlspecialchars($firstName) . " " . htmlspecialchars($lastName) . "</p>
  <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
  <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
  <p><strong>Message:</strong><br/>" . nl2br(htmlspecialchars($message)) . "</p>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: Website Contact Form <noreply@" . $_SERVER['SERVER_NAME'] . ">" . "\r\n";
$headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";

// Send email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Email successfully sent"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Failed to send the email. Please try again later."]);
}
?>
