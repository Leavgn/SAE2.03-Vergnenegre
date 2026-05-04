let templateFile = await fetch("./component/ProfileForm/template.html");
let template = await templateFile.text();

let NewProfile = {};

NewProfile.format = function (onClick, profiles = []) {
  let html = template;
  let options = "";
  for (const profile of profiles) {
    options += `<option value="${profile.id}">${profile.name}</option>`;
  }
  html = html.replace("{{options}}", options);
  html = html.replace("{{onClick}}", onClick);
  return html;
};

export { NewProfile };
