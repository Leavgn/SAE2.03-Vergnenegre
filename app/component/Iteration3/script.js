let templateFile = await fetch("./component/Iteration3/template.html");
let template = await templateFile.text();
 
let MovieDetail = {};
 
MovieDetail.format = function (movie) {
  let html = template;
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{image}}", movie.image);
  html = html.replace("{{director}}", movie.director);
  html = html.replace("{{year}}", movie.year);
  html = html.replace("{{length}}", movie.length);
  html = html.replace("{{min_age}}", movie.min_age);
  html = html.replace("{{category}}", movie.id_category);
  html = html.replace("{{description}}", movie.description);
  html = html.replace("{{trailer}}", movie.trailer);
  return html;
};
 
export { MovieDetail };