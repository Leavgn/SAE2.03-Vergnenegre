let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

/* Retourne le HTML de la navbar avec les liens, catégories desktop et mobile, et le burger. */
NavBar.format = function (hAbout, hHome, categories, hProfile, hFavorites) {
  let html = template;
  let categoriesHtml = "";
  let mobileCategoriesHtml = "";

  for (let categoryName in categories) {
    categoriesHtml += `<li class="navbar__item" onclick="C.handlerCategory('${categoryName}')">${categoryName}</li>`;
    mobileCategoriesHtml += `<span class="navbar__mobile-cat-item" onclick="C.handlerCategory('${categoryName}')">${categoryName}</span>`;
  }

  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{hHome}}", hHome); // présent 2 fois dans le template
  html = html.replace("{{categories}}", categoriesHtml);
  html = html.replace("{{mobile_categories}}", mobileCategoriesHtml);
  html = html.replace("{{hProfile}}", hProfile);
  html = html.replace("{{hProfile}}", hProfile); // présent 2 fois
  html = html.replace("{{hFavorites}}", hFavorites);
  html = html.replace("{{hFavorites}}", hFavorites); // présent 2 fois
  return html;
};

/* Initialise le burger après injection du HTML dans le DOM. */
NavBar.initBurger = function () {
  let burger = document.getElementById("navbar-burger");
  let menu = document.getElementById("navbar-mobile-menu");
  let close = document.getElementById("navbar-mobile-close");

  if (!burger || !menu) return;

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-open");
    menu.classList.toggle("is-open");
  });

  if (close) {
    close.addEventListener("click", function () {
      burger.classList.remove("is-open");
      menu.classList.remove("is-open");
    });
  }
};

export { NavBar };
