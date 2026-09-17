const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.use(express.json());
app.get('/', (req,res)=>{res.send('PayOnTimeZA is Live ✅ - Bill Reminder Service Running')});
app.get('/api/bills',(req,res)=>{res.json([{id:1,name:'DSTV',amount:500,due:'2026-09-20'}])});
app.listen(PORT,()=>{console.log(`Running on ${PORT}`)});
