const bookModel = require("../models/book.model");

exports.getAll = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json({ message: "done", data: books });
  } catch (err) {
    res.status(404).send("Er0r Stupid");
  }
};
exports.add = async (req, res) => {
  try {
    const addBook = await bookModel(req.body).save();

    res.json({ message: "done", data: addBook });
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async (req, res) => {
  try {
    await bookModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted done", data: [] });
  } catch (err) {
    console.log(err);
  }
};

exports.getOne = async (req, res) => {
  try {
    const getId = await bookModel.findById(req.params.id);
    res.json({ message: "Completed", data: getId });
  } catch (err) {
    res.status(404).send("not found");
  }
};

exports.edit = async (req, res) => {
  try {
    let { id } = req.params;
    let { Book, Author, Price } = req.body;
    const test = await bookModel.findByIdAndUpdate(id, { Book, Author, Price });
    res.json({ message: "Updated Done", data: test });
  } catch (err) {
    console.log(err);
  }
};
