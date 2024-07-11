const mongoose= require('mongoose');

const menumodel=mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true
    },
    taste:{
        type:String,
        required:true
    },
    is_drink:{
        type:Boolean,
    },
    // ingredient:{
    //     type:[String]
    // },
    num_sales:{
        type:Number,
        default:0
    },
})

const menuitem=mongoose.model('menuitem',menumodel);

module.exports=menuitem;
