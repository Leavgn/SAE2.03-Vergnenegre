let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let NewProfile = {};

/* Retourne le HTML du formulaire de profil.
   onClick : fonction appelée au clic du bouton.
   profiles : tableau de profils existants à afficher dans le <select>. */
NewProfile.format = function (onClick, profiles = []) {
  let html = template;
  let options = "";
  for (const profile of profiles) {
    options += `<option value="${profile.id}">${profile.name}</option>`;
  }
  html = html.replace("{{options}}", options); // Injecte les options dans le <select>
  html = html.replace("{{onClick}}", onClick); // Injecte la fonction du bouton
  return html;
};

export { NewProfile };
