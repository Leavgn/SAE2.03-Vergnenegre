let templateFile = await fetch("./component/Log/template.html");
let template = await templateFile.text();

let templateLi = "<li>[{{time}}] {{txt}}</li>";
let templateLiLast =
  "<li class='last'>[{{time}}] {{txt}}<span class='clignotant'> #</span></li>";

let Log = {};

let history = []; // non exporté, interne au module du composant (encapsulation)

/* Ajoute un message dans l'historique avec l'heure actuelle (privé au module). */
let add = function (txt) {
  // non exporté, interne au module du composant (encapsulation)
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let time = h + ":" + m + ":" + s; // hours, minutes, secondes
  let log = { time: time, txt: txt };
  history.push(log);
};

/* Génère le HTML de tout l'historique. Le dernier élément a un style différent (privé au module). */
let formatHistory = function () {
  // non exporté, interne au module du composant (encapsulation)
  let html = "";
  if (history.length == 0) return html;
  for (let i = 0; i < history.length - 1; i++) {
    let log = history[i];
    html += templateLi
      .replace("{{time}}", log.time)
      .replace("{{txt}}", log.txt);
  }
  let lastLog = history[history.length - 1];
  html += templateLiLast
    .replace("{{time}}", lastLog.time)
    .replace("{{txt}}", lastLog.txt);
  return html;
};

/* Ajoute un message au log et retourne le HTML complet du composant à injecter dans la page. */
Log.format = function (txt) {
  add(txt);
  let html = template;
  html = html.replace("{{logs}}", formatHistory());
  return html;
};

export { Log };
