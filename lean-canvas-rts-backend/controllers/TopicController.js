const Topic = require("../models/Topic");

module.exports = {
  async loadTopics(req, res) {
    const [rows, _] = await Topic.getAll(req.params.canvasId);
    return res.json(rows);
  },
  async insertTopic(req, res) {
    const canvasId = req.params.canvasId;
    const [rows, _] = await Topic.save(canvasId, req.body);

    const targetSocket = req.connectedUsers[canvasId];
    const topic = {
      id: rows.insertId,
      canvasId: req.params.canvasId,
      ...req.body
    };

    req.io.to(targetSocket).emit("insert", topic);

    return res.status(201).json(topic);
  },
  async updateTopic(req, res) {
    await Topic.save(req.params.canvasId, req.body);

    const targetSocket = req.connectedUsers[canvasId];
    const topic = { ...req.body };
    req.io.to(targetSocket).emit("update", topic);

    return res.status(200).json(topic);
  },
  async removeTopic(req, res) {
    await Topic.remove(req.params.canvasId, req.params.id);
    
    const targetSocket = req.connectedUsers[canvasId];
    req.io.to(targetSocket).emit("remove", { id: req.params.id });
    
    return res.status(200).end();
  }
};
