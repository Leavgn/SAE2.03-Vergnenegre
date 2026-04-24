let templateFile = await fetch('./component/AddMovie/template.html');
let template = await templateFile.text();

let NewMovie = {};

NewMovie.format = function (onClick) {
    let html = template;
    html = html.replace('{{onClick}}', onClick);
    return html;
};
 
export { NewMovie };