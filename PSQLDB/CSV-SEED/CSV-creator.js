const faker = require("faker");
faker.seed(78660);
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const csvWriter = createCsvWriter({
  header: [
    { id: "project_name", title: "PROJECT_NAME" },
    { id: "creator_name", title: "CREATOR_NAME" },
    { id: "creator_image", title: "CREATOR_IMAGE" },
    { id: "blurb", title: "BLURB" },
    { id: "thumbnail", title: "THUMBNAIL" },
    { id: "full_image", title: "FULL_IMAGE" },
    { id: "location", title: "LOCATION" },
    { id: "catagory", title: "CATAGORY" },
    { id: "description", title: "DESCRIPTION" }
  ],
  path: "./mockData.csv"
});

let time1 = process.hrtime();
let fakeProjects = 10000000;
let batchNumber = 80;
let batchlimit = fakeProjects / batchNumber;

(async () => {
  let fakeData, projectCount, lastProject;
  let count = 0;
  let createFakeProject = () => ({
    project_name: faker.commerce.productName(),
    creator_name: faker.name.firstName(),
    creator_image: faker.image.imageUrl(),
    blurb: faker.hacker.phrase(),
    thumbnail: faker.image.imageUrl(),
    full_image: faker.image.imageUrl(),
    location: faker.address.city(),
    catagory: faker.commerce.department(),
    description: faker.company.bsBuzz()
  });

  while (count < batchNumber) {
    fakeData = [];
    for (i = 0; i < batchlimit; i++) {
      fakeData.push(createFakeProject());
    }
    count++;
    (projectCount = fakeData.length * count),
      (lastProject = fakeData[fakeData.length - 1].catagory);
    console.log(`FAKE-PROJECT NUMBER: ${projectCount} is ${lastProject}`);
    await csvWriter.writeRecords(fakeData).catch(err => console.error(err));
  }

  let outsideClock = process.hrtime(time1);
  console.log(
    `It took ${Math.floor(outsideClock[0] / 60)} minutes and ${outsideClock[0] %
      60} seconds to create a CSV file with a grand total of ${fakeProjects} fake projects`
  );
})();
