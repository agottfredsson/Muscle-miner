const express = require("express");
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

//const cors = require("cors");

var app = express();
var expressWs = require("express-ws")(app);

let database;

sqlite
  .open({ driver: sqlite3.Database, filename: "muscle-miner.sqlite" })
  .then((database_) => {
    database = database_;
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
