import bcrypt from 'bcrypt';
import {User} from '../models/User.js'
import jwt from 'jsonwebtoken';

export const register = async(req,res)=>{
    const {fullname,username,password}=req.body;
    
    try{
        
        let user;
        user=await User.findOne({username});
        if(user)
        {
            // console.log("user detail : ",user);
            return res.json({message:"UserName already exist...",success:false});
        }
        
        const hashpass = await bcrypt.hash(password,10);
        user = await User.create({fullname,username,password:hashpass});
        console.log("user detail : ",user);
        return res.json({message:"user register Successfully...",success:true,user})
    }
    catch(error){
      res.json({message:error.message})
    }
};

export const login= async(req,res)=>{
    const {username,password}=req.body;

    try{
       let user=await User.findOne({username}); 
       
       if(!user)
       {
         return res.json({message:"user not found..",success:false});
       }
       const validPass= await bcrypt.compare(password,user.password);
       if(!validPass)
        return res.json({message:"Incorrect password..",success:false});

       const token = jwt.sign({userId:user._id},'!#$%^&*()',{
        expiresIn:'2d'
       });

       user=user.toObject(); 
       user.token=token;
       user.password=undefined; 
       const options={
          expires:new Date(Date.now()+3*24*60*60*1000),
          httpOnly:true,
       }
        res.cookie("token",token,options).status(200).json({message:`Welcome ${user.fullname}`,success:true,token,user});
    }
    catch(error){
        res.json({message:error.message});
    }
}


export const logout = (req, res) => {
    try {
      // Clear the cookie that stores the token
      res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Set secure flag in production
        sameSite: "strict", // Prevent CSRF attacks
      });
  
      // Send a success response
      return res.status(200).json({ message: "Successfully logged out", success: true });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong", success: false });
    }
  };
  