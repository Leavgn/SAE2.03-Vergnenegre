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

/*Cette fonction permet de récupérer tous les films filtrés par âge du profil*/ 
function readMoviesController(){
/*Si aucun age n'est spécifié (age = 0) alors tous les films sont renvoyés*/ 
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 0;
    $movies = getAllMovies($age);
    $categories = [];
    foreach ($movies as $movie) {
        $categories[$movie->category][] = $movie;
    }
    return $movies;
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
    $age = isset($_REQUEST['age']) ? $_REQUEST['age'] : 0;
    $movies = getAllMovies($age);
    $categories = [];
    foreach ($movies as $movie) {
        $categories[$movie->category][] = $movie;
    }
    return $categories;
}

function readCategoriesController() {
    return getCategories();
}

function addProfileController() {
    if (isset($_REQUEST['name']) == false || empty($_REQUEST['name']) == true) {
        return false;
    }
    $id      = !empty($_REQUEST['id']) ? $_REQUEST['id'] : null;
    $name    = $_REQUEST['name'];
    $avatar  = $_REQUEST['avatar'] ?? '';
    $min_age = $_REQUEST['min_age'] ?? 0;

    $ok = addProfile($name, $avatar, $min_age, $id);
    if ($ok != 0) {
        return $id ? "Le profil a été modifié avec succès." : "Le profil a été ajouté avec succès.";
    } else {
        return false;
    }
}

function readProfilesController() {
    return getProfiles();
}


function addFavoriteController(){
    if (isset($_REQUEST['id_profile']) == false || empty($_REQUEST['id_profile']) == true) {
        return false;
    }
    if (isset($_REQUEST['id_movie']) == false || empty($_REQUEST['id_movie']) == true) {
        return false;
    }
    $id_profile = $_REQUEST['id_profile'];
    $id_movie = $_REQUEST['id_movie'];
    $ok = addFavorite($id_profile, $id_movie);
    if ($ok != 0) {
        return "Le film a été ajouté à vos favoris.";
    } else {
        return "Ce film est déjà dans vos favoris.";
    }
}

function readFavoritesController(){
    if (isset($_REQUEST['id_profile']) == false || empty($_REQUEST['id_profile']) == true) {
        return false;
    }
    $id_profile = $_REQUEST['id_profile'];
    return getFavorites($id_profile);
}

function deleteFavoriteController() {
    if (isset($_REQUEST['id_profile']) == false || empty($_REQUEST['id_profile']) == true) {
        return false;
    }
    if (isset($_REQUEST['id_movie']) == false || empty($_REQUEST['id_movie']) == true) {
        return false;
    }
    $id_profile = $_REQUEST['id_profile'];
    $id_movie   = $_REQUEST['id_movie'];
    $ok = deleteFavorite($id_profile, $id_movie);
    if ($ok != 0) {
        return "Le film a été retiré de vos favoris.";
    } else {
        return false;
    }
}

