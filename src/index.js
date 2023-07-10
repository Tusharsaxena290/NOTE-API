const express=require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app=express();
let PORT=5001;
const mongoose=require("mongoose")

//middleWare
app.use(express.json());
app.use((req,res,next)=>{
    console.log("HTTP-METHOD-"+ req.method+ "URL-"+req.url);
    next();
})

app.use('/users',userRouter)
app.use('/note',noteRouter)



app.get("/",(req,res)=>{
    res.send("hello");
})

mongoose.connect("mongodb+srv://admin:Thgqqts6711@cluster0.81dsrot.mongodb.net/")
.then(()=>{
    
    app.listen(PORT,()=>{
        console.log(`Server is running on https://localhost:${PORT}`);
    })
}).catch((err)=>{
    console.log(err.message);
})
