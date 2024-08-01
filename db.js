const mongoose=require('mongoose')


const dbconnect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("connection successfully");
}
module.exports=dbconnect