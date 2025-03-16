const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("../server/routers/users.router");
const booksRouter = require("../server/routers/books.router");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const port = 3300;
const url =
  "mongodb+srv://abdo:abdo123@cluster0.sn8fu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(url);
    console.log("connected to DB");
  } catch (err) {
    console.log("there was an error", err);
  }
};

connectDB();

app.use("/", userRouter);
app.use("/", booksRouter);

app.listen(port, () => {
  console.log(`Iam working on ${port}`);
});
