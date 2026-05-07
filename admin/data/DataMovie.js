let HOST_URL = "../";

let DataMovie = {};

/* Envoie les données du formulaire film au serveur via une requête POST, et retourne la réponse. */
DataMovie.add = async function (fdata) {
  let config = {
    method: "POST",
    body: fdata, // fdata est un objet FormData contenant les champs du formulaire
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addMovie",
    config,
  );
  let data = await answer.json();
  return data;
};

export { DataMovie };
