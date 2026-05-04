// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "https://mmi.unilim.fr/~vergnenegre8/SAE2.03-Vergnenegre"; //"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.requestMovies = async function (age = 0) {
  // fetch permet d'envoyer une requête HTTP à l'URL spécifiée.
  // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir.
  // L'URL finale dépend de la valeur de HOST_URL et de dir.
  let answer = await fetch("../server/script.php?todo=readmovies&age=" + age);
  // answer est la réponse du serveur à la requête fetch.
  // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
  // Ces données (data) sont automatiquement converties en objet JavaScript.
  let data = await answer.json();
  // Enfin, on retourne ces données.
  return data;
};

DataMovie.requestMovieDetails = async function (id) {
  let answer = await fetch(
    "../server/script.php?todo=readMovieDetail&id=" + id,
  );
  let data = await answer.json();
  return data;
};

DataMovie.requestMoviesByCategory = async function (age = 0) {
  let answer = await fetch(
    "../server/script.php?todo=readMoviesByCategory&age=" + age,
  );
  let data = await answer.json();
  return data;
};

DataMovie.addFavorite = async function (id_profile, id_movie) {
  let answer = await fetch("../server/script.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `todo=addFavorite&id_profile=${id_profile}&id_movie=${id_movie}`,
  });
  let data = await answer.json();
  return data;
};

DataMovie.readFavorites = async function (id_profile) {
  let answer = await fetch(
    "../server/script.php?todo=readFavorites&id_profile=" + id_profile,
  );
  let data = await answer.json();
  return data;
};

export { DataMovie };
