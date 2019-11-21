const Topic = require("../models/Topic");

module.exports = {
  async loadTopics(req, res) {
    const [rows, _] = await Topic.getAll(req.params.canvasId);
    return res.json(rows);
  },
  async insertTopic(req, res) {
    const canvasId = req.params.canvasId;
    const [rows, _] = await Topic.save(canvasId, req.body);
    const topic = {
      ...req.body,
      canvasId: canvasId,
      id: rows.insertId
    };
    req.connectedUsers
      .get(canvasId)
      .forEach(s => req.io.to(s).emit("insert", topic));

    return res.status(201).json(topic);
  },
  async updateTopic(req, res) {
    await Topic.save(req.params.canvasId, req.body);

    const topic = { ...req.body };

    req.connectedUsers.get(req.params.canvasId).forEach(s => {
      req.io.to(s).emit("update", saved[0]);
    });

    return res.status(200).json(topic);
  },
  async removeTopic(req, res) {
    const [topic, _] = await Topic.getById(req.params.id);
    if (topic) {
      const [result] = await Topic.remove(req.params.canvasId, req.params.id);
      if (result.affectedRows > 0) {
        req.connectedUsers
          .get(req.params.canvasId)
          .forEach(s => req.io.to(s).emit("remove", topic[0]));
      }
    }
    return res.status(200).end();
  }
};
