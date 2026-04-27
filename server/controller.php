<?php

/** ARCHITECTURE PHP SERVEUR  : Rôle du fichier controller.php
 * 
 *  Dans ce fichier, on va définir les fonctions de contrôle qui vont traiter les requêtes HTTP.
 *  Les requêtes HTTP sont interprétées selon la valeur du paramètre 'todo' de la requête (voir script.php)
 *  Pour chaque valeur différente, on déclarera une fonction de contrôle différente.
 * 
 *  Les fonctions de contrôle vont éventuellement lire les paramètres additionnels de la requête, 
 *  les vérifier, puis appeler les fonctions du modèle (model.php) pour effectuer les opérations
 *  nécessaires sur la base de données.
 *  
 *  Si la fonction échoue à traiter la requête, elle retourne false (mauvais paramètres, erreur de connexion à la BDD, etc.)
 *  Sinon elle retourne le résultat de l'opération (des données ou un message) à includre dans la réponse HTTP.
 */

/** Inclusion du fichier model.php
 *  Pour pouvoir utiliser les fonctions qui y sont déclarées et qui permettent
 *  de faire des opérations sur les données stockées en base de données.
 */
require("model.php");


function readMoviesController(){
    $movies = getAllMovies();
    $categories = [];
    foreach ($movies as $movie) {
        $categories[$movie->category][] = $movie;
    }
    return $categories;
}

function addMovieController(){

   
    if ( isset($_REQUEST['name'])==false || empty($_REQUEST['name'])==true ){
        return false;
    }
    if ( isset($_REQUEST['director'])==false || empty($_REQUEST['director'])==true ){
        return false;
    }
    if ( isset($_REQUEST['year'])==false || empty($_REQUEST['year'])==true ){
        return false;
    }
    if ( isset($_REQUEST['length'])==false || empty($_REQUEST['length'])==true ){
        return false;
    }
    if ( isset($_REQUEST['description'])==false || empty($_REQUEST['description'])==true ){
        return false;
    }
    if ( isset($_REQUEST['id_category'])==false || empty($_REQUEST['id_category'])==true ){
        return false;
    }
    if ( isset($_REQUEST['image'])==false || empty($_REQUEST['image'])==true ){
        return false;
    }
    if ( isset($_REQUEST['trailer'])==false || empty($_REQUEST['trailer'])==true ){
        return false;
    }
    if ( isset($_REQUEST['min_age'])==false || empty($_REQUEST['min_age'])==true ){
        return false;
    }

   
    $name        = $_REQUEST['name'];
    $director    = $_REQUEST['director'];
    $year        = $_REQUEST['year'];
    $length      = $_REQUEST['length'];
    $description = $_REQUEST['description'];
    $id_category   = $_REQUEST['id_category'];
    $image       = $_REQUEST['image'];
    $trailer     = $_REQUEST['trailer'] ?? '';
    $min_age     = $_REQUEST['min_age'];

    $ok = addMovie($name, $director, $year, $length, $description, $id_category, $image, $trailer, $min_age);

    if ($ok != 0){
        return "Le film a été ajouté avec succès.";
    } else {
        return false;
    }
}

function readMovieDetailController() {
    if ( isset($_REQUEST['id'])==false || empty($_REQUEST['id'])==true ) {
        return false;
    }
    $id = $_REQUEST['id'];
    $movie = getMovieDetail($id);
    return $movie;
}

function readMoviesByCategoryController(){
    $movies = getAllMovies();
    $categories = [];
    foreach ($movies as $movie) {
        $categories[$movie->category][] = $movie;
    }
    return $categories;
}