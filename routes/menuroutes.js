const express=require('express');
const router=express.Router();
const menu=require('../models/menu');


router.get('/',async(req,res)=>{
    const response= await menu.find()
    res.json(response);
})

router.post('/',async (req,res)=>{
 const menu1=new menu(req.body);
  await menu1.save();
  res.end("saved in db");
  console.log("saved in db");
})

module.exports=router;
