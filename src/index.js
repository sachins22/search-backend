import {connectDB } from "./db/index.js";
import { app } from "./app.js";
import  dotenv  from "dotenv";


dotenv.config({
    path: './env'
})

app.listen(process.env.PORT ,process.env.HOST , ()=> {
    connectDB();
    console.log(`\n ⚙️  App is listening on port http://${process.env.HOST}:${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}/api/create`)
})






