import {connectDB } from "./db/index.js";
import { app } from "./app.js";
import  dotenv  from "dotenv";


dotenv.config({
    path: './env'
})
const Port = 1901;

connectDB()
.then(
    app.listen(Port,()=>{
        console.log(`\n ⚙️  App is listening on port ${Port}`)
    })
)
.catch ((error) => {
    console.log("MONGODB connection FAILED : ", error);
})







