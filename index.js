const express = require('express')

const app = expres()

const PORT = 3008

app.get("/",(req,res)=>{
    res.send('Welcome To Hospital Backend')
})
app.listen(PORT, ()=>{
    console.log(`Server on running port ${PORT}`);
})