import express from 'express';
import { getAllProducts, getProductById, createProductController, updateProductController, deleteProductController} from '../controllers/productSofiController.js';

const productRouters = express.Router();

//GET /api/products
productRouters.get('/', getAllProducts);
//GET /api/products/:id
productRouters.get('/:id', getProductById);
//`POST /api/products
productRouters.post('/', createProductController);
//PUT /api/products/:id`
productRouters.put('/:id', updateProductController);
//DELETE /api/products/:id
productRouters.delete('/:id', deleteProductController);

export default productRouters;
