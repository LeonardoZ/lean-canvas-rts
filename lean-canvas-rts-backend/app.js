const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes");

// ativando nosso middleware
const app = express();
const http = require("http");
const io = require("socket.io")(http);

const connectedUsers = {};

io.on("connection", socket => {
  const { canvasId } = socket.handshake.query;
  if (connectedUsers[canvasId]) {
    connectedUsers[canvasId] = connectedUsers[canvasId].push(socket.id);
  } else {
    connectedUsers[canvasId] = [].push(socket.id);
  }
});

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

module.exports = [app, http];
