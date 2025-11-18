import { Product } from "../model/productModel.js"
import { User } from "../model/userModel.js";

const getAllProduct = async (req, res) => {
    const productList = await Product.find();
    res.send(productList);
}

const productData = async(req, res)=>{
    let product = await Product.find();
    let items = [];
    for( let item of product){
        let productObj = {
            productName : item.productName,
            description : item.productDescription,
            quantity : item.productQuantity,
            price : item.productPrice
        }
        items.push(productObj);
        console.log(item)
    }

    let user = await User.findOne({email : 'abc@gmail.com'})
    res.render('product', { 
        title: 'Product Page',
        userName: user.firstName,
        items: items
    });
}


const createProduct = async (req, res) => {

    try {

        let product = await Product.findOne({productName : req.body.productName});
        if(product){
            return res.send("Product already exist");
        }
        if (req.body.productName == "" || req.body.price == null || req.body.quantity == null) {
            return res.send("Fill all the required details");
        }
        let productData = new Product({
            productName: req.body.productName,
            productDescription: req.body.description,
            productQuantity: req.body.quantity,
            productPrice: req.body.price
        })

        productData = await productData.save();

        return res.send("Product created Successsfully");

    }
    catch(error){
        res.send(error);
    }
}

const getProductDetails = async(req,res)=>{
    let product = await Product.findOne({productName : req.body.productName});
    if(!product){
        return res.send("No product available with this name");
    }
    res.send(product);
}


export {
    getAllProduct,
    createProduct,
    getProductDetails,
    productData
}