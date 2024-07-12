const mongoose= require('mongoose');
const express=require('express');

// const app=express();

//const mongoURL='mongodb://127.0.0.1:27017/hotels'
const mongoURL='mongodb+srv://dharmik123:dharmik@cluster0.b04py7c.mongodb.net/'

mongoose.connect(mongoURL)

const db=mongoose.connection;
const UserSchema= new mongoose.Schema({
    id: Number,
    name:String,
    age: Number

})

// const User=mongoose.model('User',UserSchema);

// app.get('/getusers',(req,res)=>{
//     User.find({}).then(function(users){
//         res.json(users);
//     }).catch(function(err){
//         console.log(err)
//     })

// })

db.on('connected',()=>{
console.log('connected to mongodb server');
});

// app.listen('3000',()=>{
//     console.log('server is running on 3000 port');
// })


db.on('disconnected', () => {
    console.log('disconnected from mongodb server');
  });
  
  db.on('error', (err) => {
    console.log('Error connecting to mongodb server:', err);
  });
    

module.exports=db;