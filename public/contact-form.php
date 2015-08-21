<?php
    require_once 'phpmailer/PHPMailerAutoload.php';
    if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {
        
        // ============================
        // Checks for empty form fields
        if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
            $data = array('success' => false, 'message' => 'Please fill out the form completely.');
            echo json_encode($data);
            exit;
        }

        // ================
        // Define Variables
        define('SMTP_USERNAME', 'username@domain.com');     // GoDaddy WebMail Username
        define('SMTP_PASSWORD', 'password');                // GoDaddy WebMail Password
        define('SMTP_HOST','smtpout.secureserver.net');     // GoDaddy SMTP Outgoing Server
        define('SMTP_PORT',465);                            // GoDaddy SMTP port
        define('SMTP_AUTH',true);                           // Always True
        define('SMTP_SECURE','ssl');                        // Enable SMTP Server SSL Encryption
        define('SMTP_PRIORITY',1);
        define('SMTP_CHARSET','UTF-8');                    
        define('SMTP_ENCODING','8bit');

        // ==========================
        // New Instance of PHP Mailer                   
        $mail = new PHPMailer();
        $mail->IsSMTP(); 

        // ===========
        // SMTP Config
        $mail->SMTPAuth   = SMTP_AUTH;  
        $mail->SMTPSecure = SMTP_SECURE; 
        $mail->Host       = SMTP_HOST;
        $mail->Port       = SMTP_PORT; 
        $mail->Username   = SMTP_USERNAME;
        $mail->Password   = SMTP_PASSWORD;
        $mail->Priority   = SMTP_PRIORITY;
        $mail->CharSet    = SMTP_CHARSET;
        $mail->Encoding   = SMTP_ENCODING;

        // ============
        // Email Config
        $mail->From     = $_POST['inputEmail'];
        $mail->FromName = $_POST['inputName'];
        $mail->AddAddress('username@domain.com'); 
        $mail->Subject  = $_POST['inputSubject'];
        $mail->Body     = "Name: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);
        if (isset($_POST['ref'])) {
            $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
        }
        // .....
        // error
        if(!$mail->send()) {
            $data = array('success' => false, 'message' => 'Message could not be sent.\nMailer Error:\n' . $mail->ErrorInfo);
            echo json_encode($data);
            exit;
        }
        // .......
        // success
        $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
        echo json_encode($data);
    } else {
        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
        echo json_encode($data);
    }
?>