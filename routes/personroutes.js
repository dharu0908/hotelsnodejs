const express=require('express');
const router=express.Router();
const Person =require('../models/person');

router.get('/', async (req,res)=>{
   const op=await Person.find()
    res.json(op);
})

router.get('/:work', async(req,res)=>{

    try{
        const worktype= req.params.work;
        const personfound= await Person.find({work:worktype});
        
        res.json(personfound);
        console.log("person found")
    }catch(err){
        console.log(err);
    }

})

router.post('/',async (req,res)=>{
    try{const person1 = new Person(req.body);
    await person1.save()
    console.log("saved to the database")
    res.end("saved to the database");}
    catch(e){
        console.log(e);
    }
})




module.exports=router;