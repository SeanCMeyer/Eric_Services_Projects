exports.up = async function(knex) {
  await knex.schema.createTable("projects", function(t) {
    t.increments("id").primary();
    t.string("project_name").notNull();
    t.string("creator_name").notNullable();
    t.string("creator_image").notNullable();
    t.string("blurb").notNullable(); // this doesn't sound good, think about changing the col name...
    t.string("thumbnail").notNullable();
    t.string("full_image").notNullable();
    t.string("location").notNullable();
    t.string("catagory").notNullable();
    t.string("description").notNullable();
    t.timestamp("created_at", 6).defaultTo(knex.fn.now(6));
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("projects")
    .then(knex.schema.dropTable("projects_lock"));
};
