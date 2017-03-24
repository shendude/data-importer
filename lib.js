function tsv(lines) {
  let table = [];
  for (let line of lines) {
    table.push(line.split('\t'));
  }
  console.log(table);
}

function csv(lines) {
  let table = [];
  for (let line of lines) {
    let blocks = line.split('"');
    let words = [];
    for (var i = 0; i < blocks.length; i++) {
      if (i % 2 !== 0) {
        words = words.splice
        words = words.concat([blocks[i]]);
      } else {
        words = words.concat(blocks[i].split(','));
      }
    }
    table.push(words.slice(0));
  }
  console.log(table);
}
  


const parsers = {
  tsv: tsv,
  csv: csv
};
