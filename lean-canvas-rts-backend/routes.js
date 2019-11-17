const express = require("express");
const routes = express.Router();
const CanvasController = require("./controllers/CanvasController");
const TopicController = require("./controllers/TopicController");

routes.get("/canvas", CanvasController.loadAllCanvas);
routes.get("/canvas/:id", CanvasController.loadCanvas);
routes.get("/topic/:id", TopicController.loadTopics);
routes.get("/canvas/:canvasId/topics", TopicController.loadTopics);
routes.post("/canvas/:canvasId/topics", TopicController.insertTopic);
routes.put("/canvas/:canvasId/topics", TopicController.updateTopic);
routes.delete("/canvas/:canvasId/topics/:id", TopicController.removeTopic);

module.exports = routes;