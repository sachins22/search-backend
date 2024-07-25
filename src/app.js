import express from "express"
import bodyParser from 'body-parser';

const app = express();
app.use(express.json()); // Add this line to parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));

import user from "./routes/Search.routes.js";


app.use("/api",user)

console.log(`http://localhost:${process.env.PORT}/api/create`)
app.get("/get",(req,res)=>{
    return res.send(`ss22`)
})

export{app}