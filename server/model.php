<?php
/**
 * Ce fichier contient toutes les fonctions qui réalisent des opérations
 * sur la base de données, telles que les requêtes SQL pour insérer, 
 * mettre à jour, supprimer ou récupérer des données.
 */

/**
 * Définition des constantes de connexion à la base de données.
 *
 * HOST : Nom d'hôte du serveur de base de données, ici "localhost".
 * DBNAME : Nom de la base de données
 * DBLOGIN : Nom d'utilisateur pour se connecter à la base de données.
 * DBPWD : Mot de passe pour se connecter à la base de données.
 */
define("HOST", "localhost");
define("DBNAME", "vergnenegre8");
define("DBLOGIN", "vergnenegre8");
define("DBPWD", "vergnenegre8");


function getAllMovies(){
    // Connexion à la base de données
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    // Requête SQL pour récupérer le menu avec des paramètres
     $sql = "SELECT Movie.id, Movie.name, Movie.image, Category.name as category
            FROM Movie
            JOIN Category ON Movie.id_category = Category.id
            ORDER BY Category.name";
    // Prépare la requête SQL
    $stmt = $cnx->prepare($sql);
    // Exécute la requête SQL
    $stmt->execute();
    // Récupère les résultats de la requête sous forme d'objets
    $res = $stmt->fetchAll(PDO::FETCH_OBJ);
    return $res; // Retourne les résultats
}

function addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME . ";charset=utf8", DBLOGIN, DBPWD);
    $sql = "INSERT INTO Movie (name, director, year, length, description, id_category, image, trailer, min_age)
            VALUES (:name, :director, :year, :length, :description, :id_category, :image, :trailer, :min_age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':director', $director);
    $stmt->bindParam(':year', $year);
    $stmt->bindParam(':length', $length);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':id_category', $id_category);
    $stmt->bindParam(':image', $image);
    $stmt->bindParam(':trailer', $trailer);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->execute();
    $res = $stmt->rowCount();
    return $res;
}

function getMovieDetail($id) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME . ";charset=utf8", DBLOGIN, DBPWD);
    $sql = "SELECT Movie.id, Movie.name, Movie.year, Movie.length, Movie.description,
                   Movie.director, Movie.image, Movie.trailer, Movie.min_age,
                   Category.name as category
            FROM Movie
            JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.id = :id";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->execute();
    $res = $stmt->fetch(PDO::FETCH_OBJ);
    return $res;
}

function getCategories() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME, DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Category ORDER BY name";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}

function addProfile($name, $avatar, $min_age) {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME.";charset=utf8", DBLOGIN, DBPWD);
    $sql = "INSERT INTO Profile (name, avatar, min_age) 
            VALUES (:name, :avatar, :min_age)";
    $stmt = $cnx->prepare($sql);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':avatar', $avatar);
    $stmt->bindParam(':min_age', $min_age);
    $stmt->execute();
    $res = $stmt->rowCount();
    return $res;
}

function getProfiles() {
    $cnx = new PDO("mysql:host=".HOST.";dbname=".DBNAME.";charset=utf8", DBLOGIN, DBPWD);
    $sql = "SELECT * FROM Profile ORDER BY name";
    $stmt = $cnx->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_OBJ);
}