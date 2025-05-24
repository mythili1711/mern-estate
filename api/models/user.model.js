import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
     avatar:{
        type:String,
        default:"https://th.bing.com/th/id/OIP.-n6mzk6Qt5Tu-I3ek1It1gHaHa?w=185&h=191&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
    },
},
   { timestamps:true }); 

const User = mongoose.model('User', userSchema);

export default User;