import mongoose from "mongoose";
const {Schema}=mongoose
const userSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    favs:{
        type:[Number],
        default:[]
    } 
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default  User;