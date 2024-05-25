<?php
// Connexion à la base de données
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

// Récupérer les recommandations d'images en fonction des scores
$sql = "SELECT style, image_url FROM styles WHERE score > 0 ORDER BY score DESC LIMIT 3";
$result = $conn->query($sql);

// Afficher les recommandations d'images
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<div class='recommendation'>";
        echo "<h2>" . $row["style"] . "</h2>";
        echo "<img src='" . $row["image_url"] . "' alt='" . $row["style"] . "' />";
        echo "</div>";
    }
} else {
    echo "Aucune recommandation disponible";
}

// Fermer la connexion
$conn->close();
?>
