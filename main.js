function parseFile(e) {
  console.log('event triggered');
  const file = e.target;
  const fr = new FileReader();
  fr.onload = () => {
    console.log(reader.result);
  }
  fr.readAsText(file.files[0]);
}

window.onload = () => {
  console.log('loaded');
  document.getElementById("input").addEventListener("onchange", parseFile);
}