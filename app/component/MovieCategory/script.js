import { MovieList } from "../MovieList/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function (categoryName, movies) {
    let html = template;
    let moviesHtml = "";
    for (const movie of movies) {
    moviesHtml += MovieList.format(movie);
    }
    html = html.replace("{{categoryName}}", categoryName);
    html = html.replace("{{categoryName}}", categoryName);
    html = html.replace("{{movies}}", moviesHtml);

    return html;
}

export { MovieCategory };