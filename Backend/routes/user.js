import express from 'express';
const router = express.Router();
import { login , register} from '../controller/Auth.js';
import {auth} from '../middleware/auth.js'

//register user
router.post('/register',register);

// login user
router.post('/login',login);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welocme",
    })
})

export default router;