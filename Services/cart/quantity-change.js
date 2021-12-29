const { changeQuantity } = require('../../Controllers/cart-management/change-quantity');

//CART PRODUCT CHANGING ROUTE HANDLER
const changeQty = (req, res) => {
    let { userId } = req.jwt;
    let { proId, count } = req.body;
    if (userId && proId && count == 1 || count == -1) {
        changeQuantity(userId, proId, count).then((response) => {
            res.status(201).json(response)
        }).catch((err) => {
            res.status(501).json({ status: false });
        })
    }
    else {
        res.status(201).json({ status: false });
    }

};

module.exports = { changeQty }