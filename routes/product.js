var express = require("express");
var router = express.Router();
const { auth } = require("../middlewere/auth");
const { ProductModel, UserModel } = require("../models/schema");
// all Products

router.get("/", async (req, res) => {
  let products = await ProductModel.find();
  res.send({ products });
});
// Find product with id

router.get("/:id", async (req, res) => {
  let id = req.params.id;
  let product = await ProductModel.find({ _id: id });
  res.send({ product: product[0] });
});

// Add products

router.post("/create", auth, async (req, res) => {
  let data = req.body;
  let product = await ProductModel.insertMany([data]);
  res.send({ msg: "Product Added", product });
});

//  Get all the avalble categories

router.post("/category", async (req, res) => {
  let category = await ProductModel.distinct("category").exec();
  res.send({ category });
});

// Get the data of a category

router.get("/category/:id", async (req, res) => {
  let category = req.params.id;
  let products = await ProductModel.find({ category });
  res.send({ products });
});

// Add to cart the product

router.put("/cart/add/:uid/:pid", auth, async (req, res) => {
  let uid = req.params.uid;
  let pid = req.params.pid;
  let user = await UserModel.find({ _id: uid });
  // console.log(user);
  user[0].cart.push(pid);
  let u = await UserModel.findByIdAndUpdate(uid, user[0]);
  res.send({ user: user[0] });
});

// Remove from the cart

router.delete("/cart/remove/:uid/:pid", auth, async (req, res) => {
  let uid = req.params.uid;
  let pid = req.params.pid;
  let user = await UserModel.find({ _id: uid });
  for (let i = 0; i < user[0].cart.length; i++) {
    console.log(i);
    if (user[0].cart[i] == pid) {
      user[0].cart.splice(i, 1);
      break;
    }
  }

  let u = await UserModel.findByIdAndUpdate(uid, user[0]);
  res.send({ user: user[0] });
});

// place the order

router.put("/order/:uid", auth, async (req, res) => {
  let uid = req.params.uid;
  let user = await UserModel.find({ _id: uid });
  for (let i = 0; i < user[0].cart.length; i++) {
    let product = await ProductModel.find({ _id: user[0].cart[i] });
    console.log(product[0]);
    user[0].orders.push(product[0]);
  }
  user[0].cart = [];

  let u = await UserModel.findByIdAndUpdate(uid, user[0]);
  res.send(user[0]);
});

//  get Order History
router.get("/orderhistory/:uid", auth, async (req, res) => {
  let uid = req.params.uid;
  let user = await UserModel.find({ _id: uid });
  res.send({ orders: user[0].orders });
});

// get Order Detail
router.get("/orderdetail/:uid/:oid", auth, async (req, res) => {
  let uid = req.params.uid;
  let oid = req.params.oid;
  let user = await UserModel.find({ _id: uid });
  for (let i = 0; i < user[0].orders.length; i++) {
    if (user[0].orders[i]._id == oid) {
      res.send({ oerderDetail: user[0].orders[i] });
      break;
    } else if (i == user[0].orders.length - 1) {
      res.send({ msg: "wrong product id" });
    }
  }
});

module.exports = router;
