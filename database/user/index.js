import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {type: String, required: true},
    email: {type: String, required:true},
    password: {type: String, required:true},
    address: [{details: {type: String} , for: {type: String}}],
    phonenumber: [{type: Number}]
},
{
    timestamps:true
});

export  const UserModel = mongoose.model("Users", UserSchema);