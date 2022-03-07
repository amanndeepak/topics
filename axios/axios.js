
const axios = require('axios');
const { response } = require('express');


axios.get("https://www.google.com")
.then((response)=>{
    console.log("access  " + JSON.stringify(response))
})
.catch((err)=>{
    console.log("denied "  + err)
})  