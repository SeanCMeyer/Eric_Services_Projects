const faker = require("faker");
faker.seed(78660);

let time1 = process.hrtime();
let projectInserts = 10000000;
// let projectsEachBatch = projectInserts / 20;
let fakeProjects;

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

exports.seed = async function(knex) {
  for (let i = 0; i < projectInserts; i++) {
    // count = 0;
    fakeProjects = [];

    fakeProjects.push(createFakeProject());

    // while (count < projectsEachBatch) {
    // count++;
    // }
  }
  await knex
    .batchInsert("projects", fakeProjects)
    .catch(err => console.error(err));

  let outsideClock = process.hrtime(time1);

  console.log(
    `It took ${Math.floor(outsideClock[0] / 60)} minutes and ${outsideClock[0] %
      60} seconds to seed a grand total of ${projectInserts}`
  );
};
