import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET)
}

// route for user login
const loginUser = async (req,res)=> {
    try {
        
        const { email, phone, password } = req.body;

        const user = email ? await userModel.findOne({ email }) : await userModel.findOne({ phone });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exist" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            // return user info so frontend can show name
            res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone } })
        }
        else {
            res.json({ success: false, message: "invalid credentials" })
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// route for user register
const registerUser = async (req,res)=> {

try {
    

    const { name, email, phone, password } = req.body;

    // checking if user already exists or not
    const exists = email ? await userModel.findOne({ email }) : phone ? await userModel.findOne({ phone }) : null;
    if (exists) {
        return res.json({ success: false, message: "User already exists" })
    }

    // validating email format & strong password
    if (!validator.isEmail(email)) {
        return res.json({success:false, message:"Please enter a valid email"})    
    }
    if (password.length < 8) {
        return res.json({success:false, message:"Please enter a strong eight password"})    
    }

    // hashing user password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email: email || undefined,
        phone: phone || undefined,
        password: hashedPassword
    })

    const user = await newUser.save() 

    const token = createToken(user._id)

    // return user info and token
    res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email, phone: user.phone } })

} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
}
    
}

// route for admin login
const adminLogin = async (req,res)=> {

    try {
        
        const {email,password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else {
            res.json({success:false,message:"invalid creadentials"})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

}

export  { loginUser,registerUser, adminLogin } 