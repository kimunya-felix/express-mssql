const express = require('express')
const app = express()   
const userRoute = require('./routes/userRouter')

app.use(express.json())

app.listen(4000, ()=>{
    console.log('Running....');
})
app.use('/users',userRoute)