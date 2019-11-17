const pool = require("../db/connection");

module.exports = {
  getAll(canvasId) {
    return pool.query("SELECT * FROM topics WHERE canvas_id = ?", [canvasId]);
  },
  getById(id) {
    return pool.query("SELECT * FROM topics WHERE id = ?", [id]);
  },
  save(canvasId, topic) {
    try {
      if (topic.id) {
        pool.execute(
          "UPDATE topics SET content = ? WHERE id = ? AND canvas_id = ?",
          [topic.content, topic.id, canvasId]
        );
      } else {
        return pool.execute(
          "INSERT INTO topics (canvas_id,content,section) VALUES(?,?,?)",
          [canvasId, topic.content, topic.section]
        );
      }
    } catch (err) {
      console.log(err);
    }
  },
  remove(canvasId, id) {
    return pool.execute("DELETE FROM topics WHERE id = ? AND canvas_id = ?", [id, canvasId]);
  }
};
