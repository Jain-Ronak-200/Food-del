import mongoose from "mongoose";


export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://ronak:4567r369@cluster0.qi1ls.mongodb.net/food-del').then(()=>{
        console.log("DB connected")
    })
}
