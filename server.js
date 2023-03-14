const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./databaze/connect");

db.connect();

app.get("/", (request, response) => {
  response.send("Jsi na hlavní stránceghjghjgh");
});

app.get("/cookbook", (request, response) => {
    response.send("Jsi na stránce s databází");
  });

app.listen(PORT, (err) => {
  console.log(`Server běží na ${PORT}`);
});
