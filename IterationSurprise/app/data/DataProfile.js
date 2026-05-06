let DataProfile = {};

/* Récupère la liste de tous les profils depuis le serveur via une requête GET. */
DataProfile.read = async function () {
  let answer = await fetch("../server/script.php?todo=readProfiles");
  let data = await answer.json();
  return data;
};

export { DataProfile };
