const pool = require("../db/connection");

module.exports = {
  getAll() {
    return pool.query("SELECT * FROM canvas");
  },
  getById(id) {
    return pool.query("SELECT * FROM canvas WHERE id = ?", [id]);
  },
  create(con, canvas) {},
  update(con, id, canvas) {},
  remove(con, id) {}
};
