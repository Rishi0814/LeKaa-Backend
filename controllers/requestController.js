const User = require("../models/userModel");
// const requests = require("../models/requestsModel");
const requestsModel = require("../models/requestsModel");
const { request } = require("express");

exports.addorder = async (req, res) => {
  const {
    instructions,
    requestedTime,
    quantities,
    prices,
    tip,
    items,
    acceptedByName,
    location,
    timeOfRequest,
    requestBy,
  } = req.body;
  User.findOne({ name: requestBy }).then((user) => {
    if (user) {
      const request = new requestsModel({
        instructions,
        requestedTime,
        quantities,
        prices,
        tip,
        items,
        acceptedByName,
        location,
        timeOfRequest,
        requestBy,
      });
      request.save();
      res.send("order added");
    }
  });
};

exports.orders = async (req, res) => {
  requestsModel.find({}).then((request) => {
    res.send(request);
  });
};

exports.lists = async (req, res) => {
  try {
    const requests = await requestsModel.find({ isCompleted: false });
    res.send(requests);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
};
