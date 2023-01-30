const express = require("express");
const {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCarById,
  rentCar,
} = require("../controllers/carControllers");
const Router = express.Router();

Router.route("/").get(getAllCars).post(createCar);

Router.route("/:id").get(getCarById).patch(updateCar).delete(deleteCarById);

Router.route("/:id/rent").patch(rentCar);

module.exports = Router;
