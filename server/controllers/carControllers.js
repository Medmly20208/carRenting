const Cars = require("../model/car.model");

const getCarById = (req, res) => {
  Cars.findById(req.params.id)
    .then((car) => {
      res.status(200).json({
        status: "success",
        data: car,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    });
};

const getAllCars = (req, res) => {
  Cars.find()
    .then((cars) => {
      res.status(200).json({
        status: "success",
        data: cars,
      });
    })
    .catch((error) => {
      res.json({ status: "failed", message: error });
    });
};

const createCar = (req, res) => {
  Cars.create({ ...req.body })
    .then((result) => {
      res.status(200).json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      res.status(400).json({
        status: "failed",
        message: err.message,
      });
    });
};

const updateCar = (req, res) => {
  Cars.findByIdAndUpdate(req.params.id, { ...req.body })
    .then((result) => {
      res.status(200).json({
        status: "success",
        message: "updated succesfully",
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "failed",
        message: err.message,
      });
    });
};

const deleteCarById = (req, res) => {
  Cars.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.status(200).json({
        status: "success",
        data: null,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "success",
        message: err.message,
      });
    });
};

const rentCar = (req, res) => {
  console.log(req.body);
  Cars.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        rentingHistory: req.body.renting,
      },
    },
    { new: true }
  )
    .then((car) => {
      res.status(200).json({
        status: "success",
        data: car,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "failed",
        message: err.message,
      });
    });
};

const checkIsCarAvailable = (req, res, next) => {
  Cars.findById(req.params.id)
    .then((car) => {
      if (car.rentingHistory.length === 0) {
        next();
        return;
      }
      res.status(200).json({
        status: "car is not available",
        data: null,
      });
    })
    .catch((err) => {
      res.status(200).json({
        status: "failed",
        message: err.message,
      });
    });
};

module.exports = {
  getAllCars,
  createCar,
  getCarById,
  updateCar,
  deleteCarById,
  rentCar,
  checkIsCarAvailable,
};
