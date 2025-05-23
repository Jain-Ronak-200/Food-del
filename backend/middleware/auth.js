import JWT from "jsonwebtoken";






const authMiddleware = async (req, res, next) => {
    const {token}= req.headers;
    if(!token){
        return res.json({success:false,message:"NOT AUTHORIZED LOGIN AGAIN !"})
    }
    try {
        const token_decode= JWT.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"ERROR!"})
        
    }




}


export default authMiddleware;