const Canvas = require("../models/Canvas");

module.exports = {
  async loadAllCanvas(req, res) {
    const [rows, _] = await Canvas.getAll();
    return res.json(rows);
  },
  async loadCanvas(req, res) {
    const [rows, _] = await Canvas.getById(req.params.id);
    if (rows.length === 0) {
      return res.send(206, { error: "No canvas found" });
    }
    return res.json(rows);
  }
};
