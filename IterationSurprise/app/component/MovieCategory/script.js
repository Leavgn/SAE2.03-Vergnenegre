import { MovieList } from "../MovieList/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (categoryName, movies) {
  let moviesHtml = "";
  for (const movie of movies) {
    moviesHtml += MovieList.format(movie);
  }
  let html = template;
  html = html.replaceAll("{{categoryName}}", categoryName);
  html = html.replace("{{movies}}", moviesHtml);
  return html;
};

export { MovieCategory };
