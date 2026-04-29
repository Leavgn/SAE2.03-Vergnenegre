let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hHome, categories, hProfile) {
  let html = template;
  let categoriesHtml = "";
  for (let categoryName in categories) {
    categoriesHtml += `<li class="navbar__item" onclick="C.handlerCategory('${categoryName}')">${categoryName}</li>`;
  }
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{categories}}", categoriesHtml);
  html = html.replace("{{hProfile}}", hProfile);
  return html;
};

export { NavBar };
