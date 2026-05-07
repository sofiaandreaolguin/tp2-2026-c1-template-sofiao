import "dotenv/config";

import { findAllUsers, findUserById, registerUser } from "./src/data/userData.js";

import { connectToDatabase } from "./src/data/connection.js";

await connectToDatabase();


//ejemplos de uso de las funciones de userData.js::::
/* const users =  await findAllUsers();
console.log(users); */

/* const user = await findUserById("651a1b8d2cb6c18b2d90f1c4");
console.log(user); */

const user = {name: "test", email: "Test2133054445@gmail.com", password: "123456"};
try{
const result = await registerUser(user);
console.log(result);
}catch(error){
    console.log(error.message);
}
