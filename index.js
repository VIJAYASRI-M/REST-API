require('dotenv').config();
const express = require('express');
const bookRouter= require('./routes/bookRoutes');

const app = express();
const port = process.env.PORT|| 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send({message:'Welcome to Books Api Project'});
})

app.use('/api/books',bookRouter);

app.listen(port,()=>{
    console.log(`App is listening in port ${port}`);
})

