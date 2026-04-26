let templateFile = await fetch("./component/MovieList/template.html");
let template = await templateFile.text();

let MovieList = {};

MovieList.format = function (movie) {
  let html = template;
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{image}}", movie.image);
  html = html.replace("{{id}}", movie.id); 
  return html;
  if (movie.length == 0){
    return "<p class='movie__unvailable'>Aucun film disponible pour le moment</p>";
  }
};

export { MovieList };