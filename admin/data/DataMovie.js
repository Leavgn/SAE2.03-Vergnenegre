let HOST_URL = "https://mmi.unilim.fr/~vergnenegre8/SAE2.03-Vergnenegre";

let DataMovie = {};

DataMovie.add = async function (fdata) {
    let config = {
        method: "POST",
        body: fdata
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addMovie", config);
    let data = await answer.json();
    return data;
};
 
export { DataMovie };