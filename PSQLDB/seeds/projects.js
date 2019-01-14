const faker = require("faker");

const createFakeProject = () => ({
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

let time1 = process.hrtime();
let projectInserts = 10000000;
let projectsEachBatch = projectInserts / 20;
let count, fakeProjects;

exports.seed = async function(knex) {
  await knex.schema.dropTableIfExists("projects");
  await knex.schema
    .createTable("projects", function(t) {
      t.increments("id").primary();
      t.string("project_name").nullable();
      t.string("creator_name").nullable();
      t.string("creator_image").nullable();
      t.string("blurb").nullable(); // this doesn't sound good, think about changing the col name...
      t.string("thumbnail").nullable();
      t.string("full_image").nullable();
      t.string("location").nullable();
      t.string("catagory").nullable();
      t.string("description").nullable();
      // t.timestamp("created_at", 6).defaultTo(knex.fn.now(6));
    })
    .then(async () => {
      for (let i = 0; i < 20; i++) {
        count = 0;
        fakeProjects = [];

        while (count < projectsEachBatch) {
          fakeProjects.push(createFakeProject());
          count++;
        }
        await knex
          .batchInsert("projects", fakeProjects)
          .catch(err => console.error(err));
      }
    })
    .then(() => {
      let outsideClock = process.hrtime(time1);
      console.log(
        `It took ${Math.floor(
          outsideClock[0] / 60
        )} minutes and ${outsideClock[0] %
          60} seconds to seed ${20} batches of ${projectsEachBatch} files for a grand total of ${projectInserts}`
      );
    })
    .catch(err => console.error(err));
};
