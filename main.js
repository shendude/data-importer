//parser library loader
var lib = document.createElement('script');
lib.src = "lib.js";
lib.onload = () => {lib.loaded = true};
document.head.appendChild(lib);



//reads file blob
function parseFile(e) {
  //makes sure library is loaded.
  if (!lib.loaded) {
    console.log('err: parser library not loaded');
    return;
  }
  const file = e.target.files[0];
  const name = file.name.split('.');
  const type = name[name.length-1]
  const fr = new FileReader();
  fr.onload = () => {
    const lines = fr.result.split("\n");
    parseLines(type, lines);
  }
  fr.readAsText(file);
}

//passes lines through parser library
function parseLines(type, lines) {
  parsers[type](lines.slice(0, -1));
}

window.onload = () => {
  document.getElementById("input").addEventListener("change", parseFile);
}