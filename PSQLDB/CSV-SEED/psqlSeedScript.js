const fs = require("fs");
const readFile = fs.createReadStream("./../CSV-SEED/mockData.csv");
const { Transform, Writable, Readable } = require("stream");
const db = require("../Postgresql10mil-Controler");

// CHUNK SIZE = 65536 bytes for mockData.csv

readFile.setEncoding("UTF8");

readFile.on("data", chunk => {
  readStream(chunk)
    .pipe(changeData())
    .pipe(dbWrite());
});

readFile.on("close", () => {
  console.log("HERE COMES THE DATA!!!!!!!!!!!");
});

readFile.on("error", err => {
  console.error(err);
});

function readStream(chunk) {
  const stream = new Readable({
    objectMode: true,
    highWaterMark: 65536,

    read(size) {
      console.log("reading", size);
    }
  });

  stream.push(chunk);
  return stream;
}

function changeData() {
  return new Transform({
    objectMode: true,
    transform: (chunk, encoding, done) => {
      console.log("Importing jibberish", chunk.length);
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
      console.log("Giving write stream JS object");
      done(null, data);
    }
  });
}

function dbWrite() {
  return new Writable({
    objectMode: true,
    write: async (chunk, encoding, done) => {
      console.log("inserting into DB boss!");
      await db.insert(chunk, done);
      done();
    }
  });
}
