require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const connectDB = require("./src/config/db.config");
const userRoute = require("./src/routes/user");
const categoryRoute = require("./src/routes/category");
const checkoutRoute = require("./src/routes/checkout");
const Category = require("./src/models/categoryModel");

const app = express();
const port = process.env.PORT || 9000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/clean", async(req, res) => {
  const response = await Category.db.dropCollection("categories");
  res.send(response);
});

app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/checkout",checkoutRoute)

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
};
start();
