<?php
$name = $_POST['name']; // el valor dentro de las '' debe coincidir con el valor de name de cada input
$subject = $_POST['subject'];
$email = $_POST['email'];
$message = $_POST['message'];

$destino = "sergiogermanpagano@gmail.com"; // la direcci�n de correo a d�nde quiero que llegue el mail

$desde = "Consulta enviada desde Portafolio"; // t�tulo/asunto del mail

$cuerpo = "Nombre: ".$nombre."\r\n". "Asunto: ".$asunto."\r\n"."Correo: ".$correo."\r\n"."Mensaje: ".$mensaje;

$remitente = "From: $nombre correo: <$correo>"; // direcci�n de respuesta

mail ($destino, $asunto, $cuerpo, $remitente); // Para probarlo deben subirlo a un servidor
?>