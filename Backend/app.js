const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("CONNECTED")
})



const PORT=8081;
app.listen(PORT,(req,res)=>{
    console.log(`Server CONNECTED AT PORT ${PORT}`);
})