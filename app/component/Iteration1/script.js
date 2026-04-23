let templateFile = await fetch("./component/Iteration1/template.html");
let template = await templateFile.text();

let Iteration1 = {};

Iteration1.format = function (movie) {
  let html = template;
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{name}}", movie.name);
  html = html.replace("{{image}}", movie.image);
  return html;
};

export { Iteration1 };