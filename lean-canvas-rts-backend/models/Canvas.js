const pool = require("../db/connection");

module.exports = {
  getAll() {
    return pool.query("SELECT * FROM canvas");
  },
  getById(id) {
    return pool.query("SELECT * FROM canvas WHERE id = ?", [id]);
  },
  create(canvas) {
     try {
       if (canvas && canvas.id) {
         pool.execute(
           "UPDATE canvas SET name = ? WHERE id = ?",
           [canvas.name, canvas.id]
         );
       } else {
         return pool.execute(
           "INSERT INTO canvas(name, kind_of) VALUES(?, ?)",
           [canvas.name, canvas.kind_of]
         );
       }
     } catch (err) {
       console.log(err);
     }
  },
  remove(con, id) {}
};
