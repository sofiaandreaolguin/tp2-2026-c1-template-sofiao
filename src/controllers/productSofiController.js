import { getProducts, getProductWithId, createProduct, updateProduct, findAndDelete} from "../services/productSofiService.js";


export async function getAllProducts(req, res) {
    try{
        res.json(getProducts(req.query.category))
 
    } catch (error){
        res.json({message: "Error al obtener productos", error: error.message});
    }

}

export async function getProductById(req, res) {
    try {
        const product = getProductWithId(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error: error.message });
    }
}


export async function createProductController(req, res,next) {
    try{
       const newProduct = createProduct(req.body);
       res.status(201).json({message: "Producto creado", product: newProduct});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export async function updateProductController(req, res, next) {
    try{
        const dataUpdate = updateProduct(req.params.id, req.body);
        res.json({message: "Producto actualizado", dataUpdate});
    }catch(error){
        next(error);
    }
}
export async function deleteProductController(req, res, next) {
    try {
       const deleted = findAndDelete(req.params.id);
       res.status(200).json({message: "Producto eliminado", product: deleted});
}catch (error) {
        next(error);
    }
}
