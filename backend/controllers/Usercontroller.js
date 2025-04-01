import UserModel from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"


//login user -------------------------------------------
const loginuser = async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await UserModel.findOne({email})
        if(!user){
            return res.json({success:false,message:"user doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"invalid credentials"})
        }
        const token = createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }


}

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register user -------------------------------------------------
const registeruser = async(req,res)=>{
    const {name,password,email} = req.body;
    try {
        // checking is user already exists
        const exist = await UserModel.findOne({email});
        if(exist){
            return res.json({success:false,message:"User already exist"})
        }
        // validating email format & strong password 
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})

        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new UserModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user = await newUser.save()
        console.log("User ID:", user._id);
        const token = createToken(user._id);

        // const token = createToken(user._id)
        res.json({success:true,token})
        console.log(token)

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"this is an error"})
    }
    // console.log("Payload received in registeruser:", req.body);

}
 export{loginuser,registeruser}