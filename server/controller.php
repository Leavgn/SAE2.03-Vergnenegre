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
    return $movies;
}

function addMovieController(){

   
    if ( isset($_REQUEST['titre'])==false || empty($_REQUEST['titre'])==true ){
        return false;
    }
    if ( isset($_REQUEST['realisateur'])==false || empty($_REQUEST['realisateur'])==true ){
        return false;
    }
    if ( isset($_REQUEST['annee'])==false || empty($_REQUEST['annee'])==true ){
        return false;
    }
    if ( isset($_REQUEST['duree'])==false || empty($_REQUEST['duree'])==true ){
        return false;
    }
    if ( isset($_REQUEST['description'])==false || empty($_REQUEST['description'])==true ){
        return false;
    }
    if ( isset($_REQUEST['categorie'])==false || empty($_REQUEST['categorie'])==true ){
        return false;
    }
    if ( isset($_REQUEST['image'])==false || empty($_REQUEST['image'])==true ){
        return false;
    }
    if ( isset($_REQUEST['min_age'])==false || empty($_REQUEST['min_age'])==true ){
        return false;
    }

   
    $titre        = $_REQUEST['titre'];
    $realisateur    = $_REQUEST['realisateur'];
    $annee        = $_REQUEST['annee'];
    $duree      = $_REQUEST['duree'];
    $description = $_REQUEST['description'];
    $categorie   = $_REQUEST['categorie'];
    $image       = $_REQUEST['image'];
    $trailer     = $_REQUEST['trailer'] ?? '';
    $min_age     = $_REQUEST['min_age'];

    $ok = addMovie($titre, $realisateur, $annee, $duree, $description, $categorie, $image, $trailer, $min_age);

    if ($ok != 0){
        return "Le film a été ajouté avec succès.";
    } else {
        return false;
    }
}