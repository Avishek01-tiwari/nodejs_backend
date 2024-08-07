const express = require('express')
require('dotenv').config()
const app= express()
const port=3000

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/insta',(req,res)=>{
    res.send(`https://www.instagram.com/soulart_sketching/?hl=en`)
})
app.listen(process.env.PORT,()=>
{
    console.log(`Get response at port: ${port}`);
})