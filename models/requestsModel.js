const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  instructions: {
    type: String,
    // required: true,
  },
  requestedTime: {
    type: Date,
    // required: true,
  },
  tip: {
    type: Number,
    required: true,
  },
  acceptedByName: {
    type: String,
    // default: Date.now,
  },
  acceptedByPhone: {
    type: String,
  },
  promisedTime: {
    type: Date,
  },
  items: {
    type: Array,
  },
  quantities: {
    type: Array,
  },
  prices: {
    type: Array,
  },
  location: {
    type: String,
    required: true,
  },
  helperAccepted: {
    type: Boolean,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  timeOfRequest: {
    type: Date,
    // required : true,
  },
  requestBy: {
    type: String,
    required: true,
  },
});

const requests = mongoose.model("requests", requestSchema);

module.exports = requests;
