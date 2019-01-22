const fs = require("fs");
const { Transform, Writable, Readable } = require("stream");
const readFile = fs.createReadStream(__dirname + "/./../CSV-SEED/mockData.csv");
const db = require(__dirname + "/../../PSQLDB/Postgresql10mil-Controler.js");

// CHUNK SIZE = 65536 bytes for mockData.csv
let time1 = process.hrtime();

readFile.setEncoding("UTF8");

readFile.on("data", chunk => {
  readStream(chunk)
    .pipe(changeData())
    .pipe(dbWrite());
});

readFile.on("close", () => {
  let outsideClock = process.hrtime(time1);

  console.log(
    `It took ${Math.floor(outsideClock[0] / 60)} minutes and ${outsideClock[0] %
      60} seconds to seed the Database`
  );
  console.log("That's all folks!");
  process.exit(0);
});

readFile.on("error", err => {
  console.error(err);
});

function readStream(chunk) {
  const stream = new Readable({
    objectMode: true,
    highWaterMark: 65536,

    read() {}
  });

  stream.push(chunk);
  return stream;
}

function changeData() {
  return new Transform({
    objectMode: true,
    transform: (chunk, encoding, done) => {
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
      done(null, data);
    }
  });
}

function dbWrite() {
  return new Writable({
    objectMode: true,
    write: (chunk, encoding, done) => {
      db.insert(chunk, done);
      done();
    }
  });
}

// CREATE UNIQUE INDEX index_name
// on table_name (column_name);

//select * from projects

// /{project_name:\1, creator_name:\2, creator_image:\3, blurb:\4, thubnail:\5, full_image:\6, location:\7, catagory:\8, description\9}/;
