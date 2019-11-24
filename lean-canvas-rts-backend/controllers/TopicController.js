const Topic = require("../models/Topic");

module.exports = {
  async loadTopics(req, res) {
    const [rows, _] = await Topic.getAll(req.params.canvasId);
    return res.json(rows);
  },
  async insertTopic(req, res) {
    const canvasId = req.params.canvasId;
    const rows = await Topic.save(canvasId, req.body);
    const topic = {
      section: req.body.section,
      content: req.body.content,
      canvasId: canvasId,
      id: rows.insertId
    };
    const [topics, _] = await Topic.getAll(req.params.canvasId);
    req.connectedUsers
      .get(canvasId)
      .forEach(s => req.io.to(s).emit("insert", topics));

    return res.status(201).json(topic);
  },
  async removeTopic(req, res) {
    const [topic, _] = await Topic.getById(req.params.id);
    if (!topic) {
      return res.status(206).end();
    }
    const [result] = await Topic.remove(req.params.canvasId, req.params.id);

    if (result.affectedRows === 0) {
      return res.status(400).end();
    }
    const [topics, meta] = await Topic.getAll(req.params.canvasId);
    req.connectedUsers
      .get(req.params.canvasId)
      .forEach(s => req.io.to(s).emit("remove", topics));
    return res.status(200).end();
  }
};
