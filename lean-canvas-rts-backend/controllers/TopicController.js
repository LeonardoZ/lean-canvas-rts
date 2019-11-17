const Topic = require("../models/Topic");

module.exports = {
  async loadTopics(req, res) {
    const [rows, _] = await Topic.getAll(req.params.canvasId);
    return res.json(rows);
  },
  async insertTopic(req, res) {
    const [rows, _] = await Topic.save(req.params.canvasId, req.body);

    return res.status(201).json({
      id: rows.insertId,
      canvasId: req.params.canvasId,
      ...req.body
    });
  },
  async updateTopic(req, res) {
    await Topic.save(req.params.canvasId, req.body);
    return res.status(200).json({
      ...req.body
    });
  },
  async removeTopic(req, res) {
    await Topic.remove(req.params.canvasId, req.params.id);
    return res.status(200).end();
  }
};
