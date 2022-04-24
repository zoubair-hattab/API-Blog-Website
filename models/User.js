const mongoose=require('mongoose');
const UserSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        uinque:true
    },
    email:{
        type:String,
        required:true,
        uinque:true
    },
    password:{
        type:String,
        required:true,
        uinque:true,
    },
    profilePic:{
        type:String,
        default:"",
    }
    
},{timestamps:true}
);
module.exports=mongoose.model("User",UserSchema);