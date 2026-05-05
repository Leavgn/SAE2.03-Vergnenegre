let templateFile = await fetch("./component/Profile/template.html");
let template = await templateFile.text();

let Profile = {};

/* Retourne le HTML de la carte d'un profil (avatar, nom, âge minimum, id pour le clic). */
Profile.format = function (profile) {
  let html = template;
  html = html.replace("{{id}}", profile.id);
  html = html.replace("{{min_age}}", profile.min_age);
  html = html.replace("{{avatar}}", profile.avatar);
  html = html.replace("{{name}}", profile.name); // Présent deux fois dans le template
  html = html.replace("{{name}}", profile.name);
  return html;
};

export { Profile };
