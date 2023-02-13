const mongoose = require("mongoose");

const rentSchema = mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A car must have a name"],
  },
  rating: {
    type: Number,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  upComingRenting: [rentSchema],
});

const carModel = mongoose.model("Car", carSchema);

module.exports = carModel;
