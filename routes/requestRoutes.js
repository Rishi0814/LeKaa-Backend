const express = require("express");
const requestController = require("../controllers/requestController");
const requestRouter = express.Router();

requestRouter.post("/addorder", requestController.addorder);
requestRouter.get("/orders", requestController.orders);
requestRouter.get("/getOrders", requestController.lists);

module.exports = requestRouter;
