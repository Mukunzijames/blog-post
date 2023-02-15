const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
  title:{
    type:String,
    required:true,
    unique:true
  },
  desc:{
   type:String,
  },
  image:{
    type:String,
    required:false
  },
  like:{
    type:Number,
    default:0
  },
  comments:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Comment'
  }]
  
},
{timestamps:true}
);
module.exports=mongoose.model('Post',PostSchema)