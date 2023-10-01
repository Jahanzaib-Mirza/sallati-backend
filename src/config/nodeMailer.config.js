const nodeMailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS,
  },
});

const receivedOrder = (data) => {
  const {
    email,
    fname,
    lname,
    note,
    companyName,
    products,
    subTotal,
    paymentMethod,
    total,
    shipping,
    city,
    country,
    address,
    phoneNumber
  } = data;
  ejs.renderFile(
    path.join(__dirname, "..", "templates", "received.ejs"),
    {
      fname,
      lname,
      city,
      address,
      email,
      total,
      shipping,
      companyName,
      products,
      country,
      note,
      phoneNumber,
      subTotal,
      paymentMethod,
    },
    async (err, data) => {
      try {
        if (err) {
          return err;
        } else {
          await transporter.sendMail({
            from: process.env.EMAIL,
            to: "mmmubeen761@gmail.com",
            subject: "Your Sallati Mini Mart order has been received!",
            html: data,
          });
        } 
      } catch (error) {
        throw error;
      }
    }
  );
};

module.exports = { receivedOrder };
