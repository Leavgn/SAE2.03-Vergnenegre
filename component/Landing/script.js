let templateFile = await fetch("component/Landing/template.html");
let template = await templateFile.text();

const Landing = {
  format: async function () {
    let templateFile = await fetch("component/Landing/template.html");
    return await templateFile.text();
  },
};

export { Landing };
