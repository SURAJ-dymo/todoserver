const express=require("express");
require("dotenv").config()
const Connection=require("./db/Connection");
const cors=require("cors");
const Rout=require('./routes/route')


const app=express();

app.use(cors());
app.use(express.json());


Connection();
app.use("/",Rout);
const PORT=process.env.PORT || 6010;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
