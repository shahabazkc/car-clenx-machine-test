const { cartSchema } = require('../../Models/cartModels');
let mongo = require('mongoose');
const { mongoose } = require('../../Config/mongo-connection');
const removeProduct = (userId, proId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const cartInfo = mongoose.model('cart', cartSchema);

            //REMOVING THE PRODUCT FROM THE USER CART
            cartInfo.updateOne({ user: userId },
                {
                    $pull: { products: { items: mongo.Types.ObjectId(proId) } }
                }).then((response) => {
                    resolve({ removeProduct: true })
                }).catch((err) => {
                    reject({ err: "something went wrong" })
                })
        }
        catch (err) {
            reject(err);
        }

    })

}

module.exports = { removeProduct }