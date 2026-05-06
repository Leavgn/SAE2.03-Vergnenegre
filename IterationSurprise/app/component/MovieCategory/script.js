import { MovieList } from "../MovieList/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

/* Retourne le HTML d'une catégorie avec son nom et la liste de ses films. */
MovieCategory.format = function (categoryName, movies) {
  let html = template;
  let moviesHtml = "";
  // Génère le HTML de chaque film en réutilisant le composant MovieList
  for (const movie of movies) {
    moviesHtml += MovieList.format(movie);
  }
  html = html.replace("{{categoryName}}", categoryName); // Présent deux fois dans le template
  html = html.replace("{{categoryName}}", categoryName);
  html = html.replace("{{movies}}", moviesHtml);

  return html;
};

export { MovieCategory };
