const model = require("../Schema/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

async function registerUser(req,res){
    const {userName, email, password, role="user"} = req.body; 

    const userExist = await model.findOne({    //checking for unique username & email
        $or: [
            {userName},
            {email}
        ]
    })

    if(userExist){
        res.status(409).json({
            message: "Invalid userName of email"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const newUser = await model.create({
        userName,
        email,
        password: hash,
        role
    })

    const token = jwt.sign({
        id: newUser._id,
        role: newUser.role
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        Message: "user ragristration succesful",
        newUser: {
            id: newUser._id,
            passeord: newUser.password,
            email: newUser.email,
            role: newUser.role
        }
    })
}

async function loginUser(req, res) {
    const {userName, email, password} = req.body;
    
    const user = await model.findOne({
        $or: [
            {userName},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({
            message: "Invalid username or email"
        })
    }

    const isPasswordExist = await bcrypt.compare(password, user.password);
    if(!isPasswordExist){
        return res.status(401).json({
            message: "invalid password"
        })
    }

    const token = jwt.sign({
        id: user._id,
        role: user.role
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(200).json({
        message: "login successful",
        id: user._id,
        userName: user.userName,
        passeord: user.passeord,
        email: user.email,
        role: user.role
    })
}

module.exports = {registerUser, loginUser}