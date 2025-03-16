const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.allUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json({ data: users, message: "done" });
  } catch (err) {
    console.log(err);
  }
};
exports.register = async (req, res) => {
  try {
    let newUser = new userModel(req.body);
    const hashedPassword = await bcrypt.hash(req.body.Password, 10);
    newUser.Password = hashedPassword;
    let user = await newUser.save();
    res.json({ message: `${user.FirstName} has been registered` });
  } catch (err) {
    console.log(err);
  }
};

exports.login = async (req, res) => {
  try {
    let user = await userModel.findOne({ Email: req.body.Email });
    let comparePassword = await user.comparePassword(req.body.Password);
    if (!user || !comparePassword) {
      res.status(400).send({ message: "Invalid Email or Password" });
    } else {
      const token = jwt.sign(
        { Email: user.Email, _id: user._id, role: user.role },
        "secretKey"
      );
      return res.json({
        message: "User Logged in Successfully",
        user: { Email: user.Email, id: user.id, role: user.role, jwt: token },
      });
    }
  } catch (err) {
    console.log("🚀 ~ exports.login=function ~ err:", err);
    res.status(400).send({
      message: err,
    });
  }
};
exports.edit = async (req, res) => {
  try {
    let { id } = req.params;
    let { FirstName, LastName, email, password } = req.body;
    await userModel.findByIdAndUpdate(id, {
      FirstName,
      LastName,
      email,
      password,
    });
    res.json({ message: "Update Successfully" });
  } catch (err) {
    res.status(401).json({ message: "Something went wrong", err });
  }
};

// user.delete("/api/users/:id", async (req, res) => {
//   try {
//     let { id } = req.params;
//     const user = await userModel.findByIdAndDelete(id);
//     res.json({ message: `${user.name} has been deleted` });
//   } catch (err) {
//     res.status(401).json({ message: "Something went wrong" });
//   }
// });
