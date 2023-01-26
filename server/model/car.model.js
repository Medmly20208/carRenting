const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A car must have a name"],
  },
  rating: {
    type: Number,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
  },
  rentingHistory: {
    type: Object,
    required: true,
  },
});

const carModel = mongoose.model("Car", carSchema);

module.exports = carModel;
