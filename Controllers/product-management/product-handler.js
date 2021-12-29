const { productSchema } = require('../../Models/productModel');
const { mongoose } = require('../../Config/mongo-connection');

//Fetching the Product function
const fetchProducts = () => {
    return new Promise(async (resolve, reject) => {

        //FINDING THE PRODUCTs
        
        try{
            const productModel = mongoose.model('products', productSchema);
            let products = await productModel.find();
            resolve(products);
        }
        //error handling
        catch(e){
            reject(err);
        }
    })
};

module.exports = { fetchProducts }