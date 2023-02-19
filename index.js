const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const port = process.env.port || 6000;
const passport = require("passport");
const app = express();
app.use(express.json());
const db = require("./config/keys").MongoURI;
mongoose.set('strictQuery', true);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Mongo db connected"))
  .catch((err) => console.log(err));
  app.use(express.urlencoded({ extended: false }));

  app.use(
    session({
      secret: "keyboard",
      resave: true,
      saveUninitialized: true,
    })
  );
  
  app.use(passport.initialize());
  app.use(passport.session());
app.use("/user",require("./routes/userRoutes"));
app.use("/request",require("./routes/requestRoutes"));
app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`);
})