<?php
// Verifica que el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Validar el correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Email inválido.");
    }

    // Configurar el destinatario y el asunto
    $to = 'contacto@agraound.com';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Cuerpo del correo electrónico
    $email_subject = "Nuevo mensaje de $name: $subject";
    $email_body = "Nombre: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Asunto: $subject\n";
    $email_body .= "Mensaje:\n$message\n";

    // Enviar el correo electrónico
    if (mail($to, $email_subject, $email_body, $headers)) {
        //echo "Mensaje enviado con éxito.";
        header('Location: mailSuccess.html');
    } else {
        header('Location: mailError.html');
    }
} else {
    echo "Método de solicitud no permitido.";
}
?>
