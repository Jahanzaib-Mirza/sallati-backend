const { receivedOrder } = require("../config/nodeMailer.config");

const confirmCheckout = async (req, res) => {
    try {
         receivedOrder(req.body);
        res.status(200).send({msg:"email sent"})
    } catch (error) {
        if(error.responseCode ===535){
            res.status(535).send(error);
        }
    }
};

module.exports = confirmCheckout