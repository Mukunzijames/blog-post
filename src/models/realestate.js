const mongoose= require('mongoose')
const realestateschema= new mongoose.Schema({
    
    location:{
        province:{
            type:String
        },
        district:{
            type:String
        },
        street:{
            type:String
        },
     },
     price:{
        type:String,
     },
     images:{
        type:Array,
        default:[]
     },
     beds:{
        type:Number
     },
     bath:{
        type:Number
     },
     year:{
        type:Date,
        default:Date.now
     },
     lotsize:{
        type:String
     },
     status:{
        type:String,
        default:false
     },
     description:{
        type:String
     }
},
{timestamps:true}
);
module.exports=mongoose.model('realestate',realestateschema);