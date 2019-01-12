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
exports.seed = async function(knex) {
  const fakeProjects = [];
  const numOfPhonies = 5000;
  for (i = 0; i <= numOfPhonies; i++) fakeProjects.push(createFakeProject());
  await knex("projects")
    .insert(fakeProjects)
    .then(() => {
      return knex("projects")
        .count("id")
        .then(res => console.log(res));
    })
    .catch(err => console.log(err));
};
