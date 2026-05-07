let HOST_URL = "../";

let DataProfile = {};

/* Envoie les données du formulaire profil au serveur via POST (création ou modification). */
DataProfile.add = async function (fdata) {
  let config = {
    method: "POST",
    body: fdata,
  };
  let answer = await fetch(
    HOST_URL + "/server/script.php?todo=addProfile",
    config,
  );
  let data = await answer.json();
  return data;
};

/* Récupère la liste de tous les profils depuis le serveur via une requête GET. */
DataProfile.read = async function () {
  let answer = await fetch(HOST_URL + "/server/script.php?todo=readProfiles");
  let data = await answer.json();
  return data;
};

export { DataProfile };
