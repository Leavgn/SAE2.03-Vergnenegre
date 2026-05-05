let templateFile = await fetch("./component/Iteration3/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (movie, isFavorite) {
  let html = template;
  html = html.replace("{{id}}", movie.id);
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{image}}", movie.image);
  html = html.replace("{{director}}", movie.director);
  html = html.replace("{{year}}", movie.year);
  html = html.replace("{{length}}", movie.length);
  html = html.replace("{{min_age}}", movie.min_age);
  html = html.replace("{{category}}", movie.category);
  html = html.replace("{{description}}", movie.description);
  html = html.replace("{{trailer}}", movie.trailer);
  if (isFavorite) {
    html = html.replace(
      "{{favoriteBtn}}",
      "<button class='movieDetail__btn-favorite' onclick=\"C.handlerDeleteFavorite('" +
        movie.id +
        "')\">✕ Retirer des favoris</button>",
    );
  } else {
    html = html.replace(
      "{{favoriteBtn}}",
      "<button class='movieDetail__btn-favorite' onclick=\"C.handlerAddFavorite('" +
        movie.id +
        "')\">★ Ajouter aux favoris</button>",
    );
  }
  return html;
};

export { MovieDetail };
