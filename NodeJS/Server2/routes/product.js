import { Router } from 'express';
import { createProduct, getAllProduct, getProductDetails, productData } from '../controller/productController.js';
import { authorizeRole } from '../middleware/middlware.js';

const allowedRoles = ['admin' , 'moderator'];

const productRouter = Router();

productRouter.get('/' , productData);

productRouter.get('/get-all-products', authorizeRole(allowedRoles) ,getAllProduct)

productRouter.get('/get-product' , getProductDetails);

productRouter.post('/create-product', authorizeRole(allowedRoles) , createProduct)

export default productRouter;