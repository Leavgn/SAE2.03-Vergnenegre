let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

/* Retourne le HTML de la navbar avec les liens About, Home, catégories, Profils et Favoris. */
NavBar.format = function (hAbout, hHome, categories, hProfile, hFavorites) {
  let html = template;
  let categoriesHtml = "";
  // Génère un <li> cliquable pour chaque catégorie reçue (objet clé = nom, valeur = films)
  for (let categoryName in categories) {
    categoriesHtml += `<li class="navbar__item" onclick="C.handlerCategory('${categoryName}')">${categoryName}</li>`;
  }
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{categories}}", categoriesHtml);
  html = html.replace("{{hProfile}}", hProfile);
  html = html.replace("{{hFavorites}}", hFavorites);
  return html;
};

export { NavBar };
