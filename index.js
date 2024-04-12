const express=require("express");
const app=express();
const PORT = 5000;
const cors=require("cors");//3
require('dotenv').config();//su dung file .env toan cuc
//2
const route=require("../backend/routes/index.route")
app.use(cors())
//2
//3
const database=require("./config/database");
database.connect();// su dung ket noi toan cuc

route(app)
app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
})