const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

// ativando nosso middleware
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);

const connectedUsers = new Map();

io.on("connection", socket => {
  const { canvasId } = socket.handshake.query;
  if (canvasId === "undefined") return;
  console.log(canvasId);

  if (!canvasId === undefined || connectedUsers.has(canvasId)) {
    connectedUsers.get(canvasId).add(socket.id);
  } else {
    connectedUsers.set(canvasId, new Set([socket.id]));
  }
});

io.on("disconnect", socket => {
  console.log("Disco");
  const { canvasId } = socket.handshake.query;
  delete connectedUsers[canvasId];
});

io.origins("*:*");

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

app.use(
  cors({
    origin: true
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

module.exports = [app, server];
