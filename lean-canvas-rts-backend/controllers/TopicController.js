const Topic = require("../models/Topic");

module.exports = {
  async loadTopics(req, res) {
    const [rows, _] = await Topic.getAll(req.params.canvasId);
    return res.json(rows);
  },
  async insertTopic(req, res) {
    const canvasId = req.params.canvasId;
    const [rows, _] = await Topic.save(canvasId, req.body);

    const [saved, meta] = await Topic.getById(rows.insertId);

    req.connectedUsers[canvasId].forEach(s =>
      req.io.to(s).emit("insert", saved[0])
    );

    return res.status(201).json(saved[0]);
  },
  async updateTopic(req, res) {
    await Topic.save(req.params.canvasId, req.body);

    const topic = { ...req.body };

    req.connectedUsers[req.params.canvasId].forEach(s => {
      req.io.to(s).emit("update", saved[0]);
    });

    return res.status(200).json(topic);
  },
  async removeTopic(req, res) {
    const [topic, _] = await Topic.getById(req.params.id);
    if (topic) {
      await Topic.remove(req.params.canvasId, req.params.id);
    }

    req.connectedUsers[req.params.canvasId].forEach(s =>
      req.io.to(s).emit("remove", topic[0])
    );
    return res.status(200).end();
  }
};
