const User = require("../models/userModel");
const requests = require("../models/requestsModel");
// const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.signup = async (req,res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  if (password != password2) {
    errors.push({ msg: "passwords do not match" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Password Should be of atleast 6 characters" });
  }

  if (errors.length > 0) {
    console.log(errors);
  } else {
    User.findOne({
      email: email,
    }).then((user) => {
      if (user) {
        errors.push({ msg: "Email is already registered" });
        res.send({ msg: "Email is already registered" });
        console.log(errors);
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });
        //hash password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;

            newUser
              .save()
              .then((user) => {
                // req.flash("Success_msg", "You are now Registered");
                res.send("Registered");
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
}

exports.login = async (req,res) => {
  passport.authenticate("local", {
    successMessage: "succesfully Loggedin",
    failureMessage: "login failed",
    failureFlash: true,
  });
  console.log(res);
}

