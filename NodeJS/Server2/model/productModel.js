import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        required : true
    },
    productQuantity : {
        type : Number,
        required : true
    },
     productDescription : {
        type : String,
        required : true
    },
     productPrice : {
        type : Number,
        required : true
    },
})

const Product = mongoose.model('Product' , productSchema);

export {
    Product
}