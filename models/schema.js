const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://JayShukla:jayshukla@cluster0.9zippbx.mongodb.net/Triveous"
);

const UserModel = mongoose.model(
  "user",
  mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart: Array,
    orders: Array,
  })
);

const ProductModel = mongoose.model(
  "product",
  mongoose.Schema({
    title: String,
    discription: String,
    image: String,
    category: String,
    price: Number,
    avalibility: Number,
  })
);

module.exports = { connection, UserModel, ProductModel };
