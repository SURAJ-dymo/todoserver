const express=require("express");
require("dotenv").config()
const Connection=require("./db/Connection");
const cors=require("cors");
const Rout=require('./routes/route')


const App=express();

App.use(cors());
App.use(express.json());


Connection();
App.use("/",Rout);
const PORT=process.env.PORT;

App.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
