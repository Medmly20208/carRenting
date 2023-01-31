const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./routes/carRoute");

app.use(express.json());

app.use(cors());

app.use("/api/v1/cars", carRouter);

module.exports = app;
