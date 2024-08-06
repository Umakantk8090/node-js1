// const mongoose=require('mongoose');
// const mongoURL='mongodb://localhost:27017/hotels'

// mongoose.connect(mongoURL,{
//     // useNewUrlParse:true,
//     // useUnifiedTopology:true
// })
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/hotels").then(()=>{
    console.log("connected to mongodb successfully");
}).catch((err)=>{
    console.log(err);
})




const db=mongoose.connection;

db.on('connection',()=>{
    console.log('connection to mongodb server');
})
db.on('error',(err)=>{
console.log('mongodb disconnected error',err);
})
db.on('disconnected',()=>{
    console.log('mongodb disconnection');
});

module.exports=db;