let templateFile = await fetch("./component/Profile/template.html");
let template = await templateFile.text();

let Profile = {};

Profile.format = function (profile) {
  let html = template;
  html = html.replace("{{id}}", profile.id);
  html = html.replace("{{avatar}}", profile.avatar);
  html = html.replace("{{name}}", profile.name);
  html = html.replace("{{name}}", profile.name);
  return html;
};

export { Profile };
