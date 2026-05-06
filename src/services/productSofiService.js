import { findAllProducts } from "../data/productData.js";
import {findProductById, insertProduct, replaceProduct, deleteProduct, findAllByCategory} from "../data/productData.js";

export function getProducts(category) {
    if (category) {
        return findAllByCategory(category);
    }
    return findAllProducts();        
}
export function getProductWithId(id) {
    return findProductById(id);
}

function validate(data) {
    const { name, brand, category, price, stock } = data;
    if (!name || !brand || !category || price === undefined || stock === undefined) {
        const err = new Error("Todos los campos son obligatorios (name, brand, category, price, stock)");
        err.status = 400;
        throw err;
    }
    if (typeof name !== "string" || name.trim() === "") {
        const err = new Error("El nombre no puede estar vacío");
        err.status = 400;
        throw err;
    }
    if (typeof price !== "number" || price <= 0) {
        const err = new Error("El precio debe ser un número mayor a 0");
        err.status = 400;
        throw err;
    }
    if (!Number.isInteger(stock) || stock < 0) {
        const err = new Error("El stock debe ser un entero mayor o igual a 0");
        err.status = 400;
        throw err;
    }
}
export function createProduct(data) {
    validate(data);
    return insertProduct({ name: data.name.trim(), brand: data.brand, category: data.category, price: data.price, stock: data.stock });
}
export function updateProduct  (id, data) {
if(!findProductById(id)){
    const err = new Error("Producto no encontrado");
    err.status = 404;
    throw err;
} else{validate(data);}
return replaceProduct (id, { name: data.name.trim(), brand: data.brand, category: data.category, price: data.price, stock: data.stock });
}

export function findAndDelete(id) { 
    const deleted = deleteProduct(id);

    if (!deleted) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }

    return deleted;
}
