const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors())

app.get('/',(req,res)=>{
    res.send('data to 5000')
})
app.post('/moviename',(req,res)=>{
    const movieName=req.body;
})
app.listen(5000,()=>{
    console.log('listening to port 5000')
})