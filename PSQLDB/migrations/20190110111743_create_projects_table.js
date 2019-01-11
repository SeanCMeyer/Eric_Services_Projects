exports.up = function(knex, Promise) {
  return Promise(
    knex.schema.createTable("projects", function(table) {
      table.increments("id").primary();
      table.string("project_name").notNullable();
      table.string("creator_name").notNullable();
      table.string("creator_imgage").notNullable();
      table.string("blurb").notNullable(); // this doesn't sound good, think about changing the col name...
      table.string("thumbnail").notNullable();
      table.string("full_image").notNullable();
      table.string("location").notNullable();
      table.string("catagory").notNullable();
      table.string("description").notNullable();
      table.timestamp("created_at", 6).defaultTo(knex.fn.now(6));
    })
  );
};

exports.down = function(knex, Promise) {
  return Promise(knex.schema.dropTableIfExists("projects"));
};
