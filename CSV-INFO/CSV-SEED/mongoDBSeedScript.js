const fs = require("fs");
const { Transform, Writable, Readable } = require("stream");
const readFile = fs.createReadStream(__dirname + "/./../CSV-SEED/mockData.csv");
const db = require(__dirname + "/../../MONGODB/MongoDBHandler");

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
          blurb: data[i][2],
          full_image: data[i][3],
          location: data[i][4],
          catagory: data[i][5]
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
      db.insertion(chunk, done);
      done();
    }
  });
}

// CREATE UNIQUE INDEX index_name
// on table_name (column_name);

//select * from projects
