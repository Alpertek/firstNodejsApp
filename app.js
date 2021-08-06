const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/calculate/sqrt/:a',(req,res)=>{
    try{
        res.send((Number.parseInt(req.params.a)*Number.parseInt(req.params.a)).toString())
    }catch(err){
        res.send("hatalı giriş")
    }
    
    
})

const port = 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
