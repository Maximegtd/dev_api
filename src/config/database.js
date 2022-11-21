import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/api")
  .then(() => {
    console.log("Succesfully connected to databse");
  })
  .catch((err) => {
    console.log("Error during databse connection : " + err);
  });
