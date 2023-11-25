require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const compression = require('compression');
const csv = require("csvtojson");

const connectDB = require("./src/config/db.config");
//Models
const Category = require("./src/models/categoryModel");
//Routes
const userRoute = require("./src/routes/user");
const categoryRoute = require("./src/routes/category");
const checkoutRoute = require("./src/routes/checkout");
const productRoute = require("./src/routes/product");

const Product = require("./src/models/productModel");

const app = express();
const port = process.env.PORT || 9000;
//Middlewares
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var upload = multer({ dest: "uploads/" });

app.get("/clean", async (req, res) => {
  const response = await Product.db.dropCollection("products");
  res.send(response);
});

app.post("/csv", upload.single("file"), async (req, res, next) => {
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      var products = [];
      for (var i = 0; i < jsonObj.length; i++) {
        products.push(jsonObj[i]);
      }
      Product.insertMany(products).then(function(){
          res.status(200).send({
              message: "Successfully Uploaded!"
          });
      }).catch(function(error){
          res.status(500).send({
              message: "failure",
              error
          });
      });
    })
    .catch((error) => {
      res.status(500).send({
        message: "failure",
        error,
      });
    });
});

app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/checkout", checkoutRoute);
app.use("/api/products", productRoute);

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
};
start();
