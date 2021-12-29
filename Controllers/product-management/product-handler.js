const { productSchema } = require('../../Models/productModel');
const { mongoose } = require('../../Config/mongo-connection');

//Fetching the Product function
const fetchProducts = (type) => {
    return new Promise(async (resolve, reject) => {

        //FINDING THE PRODUCT WITH THE TYPE
        //TYPES ARE "first-category", "second-category" , "third-category", "fourth-category"
        try{
            const productModel = mongoose.model('products', productSchema);
            let products = await productModel.find({ type: type });
            resolve(products);
        }
        //error handling
        catch(e){
            reject(err);
        }
    })
};

module.exports = { fetchProducts }