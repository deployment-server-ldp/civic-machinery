<?php
/**
 * Civic Tobacco Machinery — enquiry mail handler.
 *
 * The website's forms POST here. The recipient address lives ONLY in this
 * server-side file, so it never appears in the front-end HTML or JavaScript.
 * Works on PHP hosting (e.g. Hostinger). Upload alongside the site files.
 */

header('Content-Type: application/json; charset=utf-8');

// Recipient — kept server-side only.
$TO = 'saadaliorchid@gmail.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Accept JSON or normal form-encoded submissions.
$contentType = $_SERVER['CONTENT_TYPE'] ?? '';
if (stripos($contentType, 'application/json') !== false) {
    $data = json_decode(file_get_contents('php://input'), true) ?: [];
} else {
    $data = $_POST;
}

// Honeypot — bots fill this; humans never see it.
if (!empty($data['company'])) {
    echo json_encode(['ok' => true]); // pretend success, drop silently
    exit;
}

// Strip header-injection characters.
function field($v) {
    return trim(str_replace(["\r", "\n", "%0a", "%0d"], ' ', (string) $v));
}

$name     = field($data['name'] ?? '');
$email    = field($data['email'] ?? '');
$phone    = field($data['phone'] ?? '');
$interest = field($data['interest'] ?? '');
$source   = field($data['source'] ?? '');
$message  = trim((string) ($data['message'] ?? ''));

if ($name === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Missing required fields']);
    exit;
}

$subject = 'Website enquiry from ' . $name . ($interest !== '' ? ' - ' . $interest : '');

$body  = "New enquiry from the Civic Tobacco Machinery website\n\n";
$body .= "Name: $name\n";
$body .= "Phone: $phone\n";
if ($email !== '')    { $body .= "Email: $email\n"; }
if ($interest !== '') { $body .= "Interested in: $interest\n"; }
if ($source !== '')   { $body .= "Page: $source\n"; }
$body .= "\nMessage:\n$message\n";

// From address uses the site's own domain for better deliverability.
$host = preg_replace('/^www\./', '', $_SERVER['HTTP_HOST'] ?? 'civic-tobacco-machinery.com');
$headers  = 'From: Civic Tobacco Machinery <no-reply@' . $host . ">\r\n";
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= 'Reply-To: ' . $email . "\r\n";
}
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

if (@mail($TO, $subject, $body, $headers)) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail send failed']);
}
