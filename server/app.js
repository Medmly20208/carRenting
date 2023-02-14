const express = require("express");
const app = express();
const cors = require("cors");
const carRouter = require("./routes/carRoute");
const userRouter = require("./routes/userRoute");

app.use(express.json());

app.use(cors());

app.use("/api/v1/cars", carRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
