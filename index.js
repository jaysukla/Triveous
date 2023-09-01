const express = require("express");
const app = express();
const { connection } = require("./models/schema");
app.use(express.json());
// Routes
const Userrouter = require("./routes/user");
const Productrouter = require("./routes/product");
// redirecting to the Routes
app.use("/user", Userrouter);
app.use("/product", Productrouter);
app.get("/", (req, res) => {
  res.send({ mag: "Server is Active" });
});

app.listen(8000, () => {
  console.log("Listning to the port 8000");

  try {
    connection;
    console.log("DB connection successfull");
  } catch (error) {
    console.log("Err in db Connection ");
    console.log(error);
  }
});
