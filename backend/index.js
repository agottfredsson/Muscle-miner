const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());
const ws = require("ws");
const webSocket = new ws.Server({ port: 3001 });
const expressWs = require("express-ws")(app);

let database;

webSocket.on("connection", (webSocket) => {
  console.log("Client connected");

  setInterval(() => {
    webSocket.send("Hello World!");
  }, 1000);
});

sqlite
  .open({ driver: sqlite3.Database, filename: "muscle-miner.sqlite" })
  .then((database_) => {
    database = database_;
  });

app.get("/", (request, response) => {
  database.all("SELECT * FROM users").then((users) => {
    response.send(users);
  });
});


app.get("/topscore", (request, response) => {
  database.all("SELECT name, score, trueclicks FROM users WHERE score > 100 ORDER BY score DESC LIMIT 10").then((users) => {
    response.send(users);
  });
});

app.post("/:userName", (request, response) => {
  database
    .run("INSERT INTO users (name, score) VALUES (?, ?)", [
      request.params.userName,
      0,
    ])
    .then((users) => {
      response.send(users);
    });
});

app.use(function (req, res, next) {
  console.log("middleware");

  req.testing = "testing";
  return next();
});

app.get("/", function (req, res, next) {
  console.log("get route", req.testing);
  res.end();
});

app.ws("/", function (ws, req) {
  ws.on("message", function (obj) {
    const userObj = JSON.parse(obj);

    database
      .run("UPDATE users SET score=(?), trueclicks=(?) WHERE userId=(?) ", [
        userObj.score,
        userObj.trueclicks,
        userObj.id,
        
      ])
      .then((users) => {
        response.send(users);
      });
  });
});

app.listen(3000);
