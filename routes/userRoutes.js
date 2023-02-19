const express = require("express");
const userController = require("../controllers/userController")
const UserRouter = express.Router();


UserRouter.post("/register", userController.signup);

UserRouter.post("/login",userController.login);

module.exports = UserRouter;
