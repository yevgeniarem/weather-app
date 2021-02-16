const express = require("express");
const cors = require("cors");

const cities = require("./cities.json");

const app = express();
const port = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.get("/cities/:cityId", (req, res) => {
  const city = require(`./cities/${req.params.cityId}`);
  res.json(city);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
