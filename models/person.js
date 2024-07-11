const mongoose =require('mongoose');

const personSchema= mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  work:{
    type:String,
    enum:['chef','waiter']
  },
  mobile:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
   type:String
  },
  salary:{
    type:Number,
    required:true
  }


})

const person=mongoose.model('person',personSchema);

module.exports=person;