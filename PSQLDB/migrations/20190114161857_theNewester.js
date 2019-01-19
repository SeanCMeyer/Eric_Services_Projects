exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("projects", function(t) {
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
      t.timestamp("created_at", 6).defaultTo(knex.fn.now(6));
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("projects")]);
};
