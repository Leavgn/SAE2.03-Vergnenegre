let templateFile = await fetch("./component/MovieList/template.html");
let template = await templateFile.text();

let MovieList = {};

/* Retourne le HTML de la carte d'un film (nom, image, id pour le clic vers le détail). */
MovieList.format = function (movie) {
  let html = template;
  html = html.replace("{{name}}", movie.name); // Présent deux fois dans le template
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{image}}", movie.image);
  html = html.replace("{{id}}", movie.id); // Présent deux fois (attribut + handler onclick)
  html = html.replace("{{id}}", movie.id);

  // Si le film n'a pas de durée renseignée, affiche un message à la place de la carte
  if (movie.length == 0) {
    return "<p class='movie__unvailable'>Aucun film disponible pour le moment</p>";
  }
  return html;
};

export { MovieList };
