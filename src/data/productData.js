import { getDb } from "./connection.js";
import { ObjectId, ReturnDocument } from "mongodb";

export async function findAllProducts({ category, brand } = {}) {
   const db = getDb();
    const products = db.collection('products').find(category || brand ? { category, brand } : {}).toArray();
return products
}

export async function findProductById(id){
    try{
    const db = getDb();
    const product = await db.collection('products').findOne({ _id: new ObjectId(id) });
   if(!product) return null;
   const { _id, ...rest } = product;
   return { id: _id.toString(), ...rest };
} catch {
return null
    }
}

export async function insertProduct(product) {
    try{
   const db = getDb();
    const newProduct = { id: String(nextId++), ...product };
    return await db.collection ('products').insertOne(newProduct);;    
}catch{
        throw new Error("Error al insertar el producto en la base de datos");
        return null;
    }
}

export async function replaceProduct(id, product) {
    try{
    const db = getDb();
   const replace = await db.collection('products').findOneAndReplace({ _id: new ObjectId(id)}, doc, {ReturnDocument:"after" });
   /*  const index = db.collection('products').findIndex(p => p.id === id);
    if (index === -1) return null;
    db.collection('products')[index] = { id, ...product }; */
  return await db.collection('products')[index];    
} catch{
        return null;
    }

}

export async function removeProduct(id) {
    try{
    const db = getDb();
   /*  const index = db.collection('products').findIndex(p => p.id === id);
    if (index === -1) return false; */
    return await db.collection('products').deleteOne({_id: new ObjectId(id)});
    }catch{
        return null;
    }
}
