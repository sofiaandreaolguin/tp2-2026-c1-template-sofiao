import { findAllProducts, findProductById, insertProduct, replaceProduct, removeProduct } from "../data/productData.js";

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

export async function getProducts(filters) {
    return await findAllProducts(filters);
}

export async function getProductById(id) {
    const product = findProductById(id);
    if (!product) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }
    return product;
}

export async function createProduct(data) {
    validate(data);
    return insertProduct({ name: data.name.trim(), brand: data.brand, category: data.category, price: data.price, stock: data.stock });
}

export async function updateProduct(id, data) {
    const existing = findProductById(id);
    if (!existing) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }
    validate(data);
    return replaceProduct(id, { name: data.name.trim(), brand: data.brand, category: data.category, price: data.price, stock: data.stock });
}

export async function deleteProduct(id) {
    const deleted = removeProduct(id);
    if (!deleted) {
        const err = new Error("Producto no encontrado");
        err.status = 404;
        throw err;
    }
}
