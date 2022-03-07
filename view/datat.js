const express = require('express')
const app=express()
const port=6000;


app.get((req,res)=> {
req.send(__dirname,'/datatable.html')
})

app.listen(port,()=>{
console.log(`${port}`)
})

