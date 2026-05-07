import { getDb } from "./connection.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";


export async function findAllUsers() {
    const db = getDb();
    const users = db.collection('users').find().toArray();
    //console.log(users);
    return users;
}

export async function findUserById(id) {
    const db = getDb();
    const user = db.collection('users').findOne({ _id: new ObjectId(id) });
    return user;
}

export async function registerUser({name, email, password}) {
const db = getDb(); 
    // verificar si el email ya existe
    const existingUser = await db.collection('users').findOne({ email });
    if(existingUser) {
        throw new Error('El email ya está registrado');        
    }
    /* try{
        const existingUser = await db.collection('users').findOne({ email });
        if(existingUser) {
        throw new Error('El email ya está registrado');        
    }
    }catch(error){
        error.status = 400;
        console.log(error.message);
    } */
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
        name, 
        email,
        password : hashedPassword
    };

    const result = await db.collection('users').insertOne(newUser);

    return result;
}