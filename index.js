require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors')

const connectDB = require("./src/config/db.config");
const userRoute = require("./src/routes/user");
const categoryRoute = require("./src/routes/category");
// const client = require("twilio")(process.env.SID, process.env.AUTH_TOKEN);
const otpGenerator = require("otp-generator");

const app = express();
const port = process.env.PORT || 9000;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// const otp = otpGenerator.generate(4, {lowerCaseAlphabets:false, upperCaseAlphabets: false, specialChars: false });
// console.log(otp)
// client.messages
//   .create({
//     body: "Fuck you",
//     from: "+17025088968",
//     to: "+923232489669",
//   })
//   .then((message) => console.log(message.sid))
//   .catch(e =>console.log(e));

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);

const start = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
};
start();
