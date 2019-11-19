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

    const targetSocket = req.connectedUsers[canvasId];
    const topic = { ...req.body };
    
    req.connectedUsers[canvasId].forEach(s =>{
      console.log("Remove");
      req.io.to(s).emit("remove", saved[0])}
    );

    return res.status(200).json(topic);
  },
  async removeTopic(req, res) {
    await Topic.remove(req.params.canvasId, req.params.id);

    const targetSocket = req.connectedUsers[req.params.canvasId];
    req.io.to(targetSocket).emit("remove", { id: req.params.id });

    return res.status(200).end();
  }
};
