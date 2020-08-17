const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();

const cors = require("cors");
app.use(express.json());
app.use(cors());

const expressWs = require("express-ws")(app);

let database;

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
  ws.on("message", function (msg) {
    console.log(msg);
  });
  console.log("socket", req.testing);
});

app.listen(3000);
