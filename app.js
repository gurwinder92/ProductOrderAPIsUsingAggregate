const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyparser = require("body-parser");
const port = 2000;
const router = require('../productOrderAPIsUsingAggregate/userRouter/userRoute')
const server_url = "mongodb://localhost:27017/customer";
app.use(bodyparser.json());
app.use(express.json());
app.use("/", router);

mongoose.connect(server_url);

const database = mongoose.connection;
database.once("open", (_) => {
  console.log(`Successfully connected to database`, server_url);
});
database.on(`error`, (err) => {
  console.log(`database connection failed. exiting now...`, err);
});
app.listen(port, () => {
  console.log(`server listening at localhost: ${port}`);
});