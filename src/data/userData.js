import { getDb, connectToDatabase } from "./connection.js";
import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";


export async function findAllUsers() {
     await connectToDatabase();
    const db = getDb();
    const users = await db.collection('users').find().toArray();
    console.log(users);
    return users;
}

export async function findUserById(id) {
     await connectToDatabase();
    const db = getDb();
    const user = db.collection('users').findOne({ _id: new ObjectId(id) });
    return user;
}

export async function registerUser({name, email, password}) {
    await connectToDatabase();
    const db = getDb();

    // verificar si el email ya existe
    const existingUser = await db.collection('users').findOne({ email });
    if(existingUser) {
        throw new Error('El email ya está registrado');        
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
        name, 
        email,
        password : hashedPassword
    };
    console.log("Nuevo usuario a registrar:", newUser);
    const result = await db.collection('users').insertOne(newUser);

    return result;
}

export async function findByCredentials(email, password) {
     await connectToDatabase();
    const db = getDb();
    const user = await db.collection('users').findOne({ email });
    if(!user){
        // no encontro el email
        return null;
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        // password no coincide
        return null;
    }
    return user;
}
