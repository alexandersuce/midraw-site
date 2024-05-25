<?php
$servername = "localhost";
$username = "root"; // Remplacez par votre nom d'utilisateur MySQL
$password = ""; // Remplacez par votre mot de passe MySQL
$dbname = "drawing_styles";

// Créer la connexion
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}

$data = json_decode(file_get_contents('php://input'), true);
$style = $data['style'];
$like = $data['like'];

// Mettre à jour le score du style
$sql = "UPDATE styles SET score = score ";
if ($like) {
    $sql .= "+ 1";
} else {
    $sql .= "- 1";
}
$sql .= " WHERE style = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $style);

if ($stmt->execute()) {
    echo json_encode(["message" => "Feedback enregistré avec succès"]);
} else {
    echo json_encode(["message" => "Erreur lors de l'enregistrement du feedback"]);
}

$stmt->close();
$conn->close();
?>
