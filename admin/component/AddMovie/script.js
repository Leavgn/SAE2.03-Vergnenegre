let templateFile = await fetch("./component/AddMovie/template.html");
let template = await templateFile.text();

let NewMovie = {};

/* Retourne le HTML du formulaire d'ajout de film. onClick est la fonction appelée au clic du bouton. */
NewMovie.format = function (onClick) {
  let html = template;
  html = html.replace("{{onClick}}", onClick);
  return html;
};

/* Récupère les catégories */
NewMovie.fillCategories = async function () {
  let answer = await fetch("../server/script.php?todo=readCategories");
  let categories = await answer.json();
  let select = document.querySelector("#category-select");
  select.innerHTML = "";
  for (const category of categories) {
    select.innerHTML += `<option value="${category.id}">${category.name}</option>`;
  }
};

export { NewMovie };
