import express from "express";

import dotenv from "dotenv"

import morgan from "morgan"

import bodyParser from "body-parser"

import path from "path"

import { fileURLToPath } from 'url'

// import route from "./server/routes/router";
import route from "./server/routes/router.js"

import connectDB from "./server/database/connection.js";

const app= express();

dotenv.config()

const PORT=process.env.PORT ||8080


//log requests
app.use(morgan('dev'))


//parse request to body-parser
app.use(bodyParser.json({limit : "30mb",extended:true})) ;

app.use(bodyParser.urlencoded({limit: "30mb",extended:true}));

//set view engine
app.set("view engine","ejs")

// load assets 
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/img",express.static(path.resolve(__dirname,"assets/img")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))


// load routes
app.use("/",route)
app.listen(PORT,()=>{

    console.log(`Server is running on http://localhost:${PORT}`)

})
connectDB()