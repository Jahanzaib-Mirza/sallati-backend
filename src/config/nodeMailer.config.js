const nodeMailer = require("nodemailer");
const ejs = require("ejs");
const path = require('path')


const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS,
  },
});

const receivedOrder =  ({ email, firstName, lastName,products,subTotal,paymentMethod, country, city,address }) => {
    ejs.renderFile(path.join(__dirname,"..","templates","received.ejs"),{firstName,city,address,email,lastName,products,subTotal,paymentMethod},async(err,data)=>{
        if(err){
            throw err;
        }else{
            await transporter.sendMail({
              from: process.env.EMAIL,
              to: "mmmubeen761@gmail.com",
              subject: "Your Sallati Mini Mart order has been received!",
              html: data
            });

        }
    })
  
};

module.exports = { receivedOrder };
