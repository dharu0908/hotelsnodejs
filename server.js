const express=require('express');
const db=require('./db');
//const Person =require('./models/person');
const bodyParser = require('body-parser');
const menu=require('./models/menu');


app=express();
 
app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.send('welcomne to my hotel');
})



// app.get('/person', async (req,res)=>{
//    const op=await Person.find()
//     res.json(op);
// })

//app.use('/person',personRoutes);
// app.get('/person/:work', async(req,res)=>{

//     try{
//         const worktype= req.params.work;
//         const personfound= await Person.find({work:worktype});
        
//         res.json(personfound);
//         console.log("person found")
//     }catch(err){
//         console.log(err);
//     }

// })
// app.get('/menu',async(req,res)=>{
//     const response= await menu.find()
//     res.json(response);
// })

// app.post('/menu',async (req,res)=>{
//  const menu1=new menu(req.body);
//   await menu1.save();
//   res.end("saved in db");
//   console.log("saved in db");
// })

const personRoutes = require('./routes/personroutes');
app.use('/person', personRoutes);
const menuRoutes = require('./routes/menuroutes');
app.use('/menu', menuRoutes)

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})