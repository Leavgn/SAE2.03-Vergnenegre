let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let NewProfile = {};

NewProfile.format = function (onClick) {
  let html = template;
  html = html.replace("{{onClick}}", onClick);
  return html;
};

export { NewProfile };
