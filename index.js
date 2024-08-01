const express=require('express');
const dbconnect = require('./db');
const user = require('./user.schema');
const isvalid = require('./validate');


const app=express()
app.use(express.json())

app.get('/',async(req,res)=>{
    let data=await user.find()
    res.send(data)
})

app.post('/',isvalid,async(req,res)=>{
    let data=await user.create(req.body)
    res.send(data)
})

app.delete('/:id',async(req,res)=>{
    let {id}=req.params
    let data=await user.findByIdAndDelete(id)
    res.send(data)
})

app.patch('/:id',async(req,res)=>{
    let {id}=req.params
    let data=await user.findByIdAndUpdate(id,req.body)
    res.send(data)
})




app.listen(8090,()=>{
    console.log("listening on port 8090..");
  dbconnect()
})