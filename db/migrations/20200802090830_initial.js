const Knex = require("knex");

const tableNames = require("../../src/constant/tableNames");

const addDefaultColumns = (table) => {
  table.timestamps(false, true);
  table.datetime("deleted_at");
};
/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.users, (table) => {
    table.increments().notNullable();
    table.string("name").notNullable().unique();
    table.string("password").notNullable();
    addDefaultColumns(table);
  });
};

exports.down = function (knex) {
  return Promise.all(
    [tableNames.users].map((tableName) => knex.schema.dropTable(tableName))
  );
};
