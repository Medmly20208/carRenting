const express = require("express");
const {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCarById,
} = require("../controllers/carControllers");
const Router = express.Router();

Router.route("/").get(getAllCars).post(createCar);

Router.route("/:id").get(getCarById).patch(updateCar).delete(deleteCarById);

module.exports = Router;
