const fs = require("fs");
const readFile = fs.createReadStream("./../CSV-SEED/mockData.csv");
const writeFile = fs.createWriteStream("./testing.txt");
const { Transform } = require("stream");
const db = require("../Postgresql10mil-Controler");

// CHUNK SIZE = 65536 bytes for mockData.csv

const makeArrays = new Transform({
  objectMode: true,
  transform(chunk) {
    let data = chunk
      .toString()
      .trim()
      .split("\n");
    for (let i = 0; i < data.length; i++) {
      data[i] = data[i].split(",");
    }
    for (let i = 0; i < data.length; i++) {
      data[i] = {
        project_name: data[i][0],
        creator_name: data[i][1],
        creator_image: data[i][2],
        blurb: data[i][3],
        thumbnail: data[i][4],
        full_image: data[i][5],
        location: data[i][6],
        catagory: data[i][7],
        description: data[i][8]
      };
    }
    console.log(JSON.stringify(data));
    this.push(JSON.stringify(data));
  }
});

// const DbWriteStream = new Writable(
//   {
//     objectMode: true
//   },
//   (_write = function(data, encoding, callback) {
//     db.insert(JSON.stringify(data), callback);
//   })
// );

readFile.pipe(makeArrays).pipe(writeFile);
