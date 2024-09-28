import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    fullname:{ type:String, required:true},
    username:{type:String, required:true},
    password:{type:String, required:true}
});


export const User =mongoose.model("User",userSchema);