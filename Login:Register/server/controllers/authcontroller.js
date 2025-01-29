const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const createError = require('../utils/appError');

// Register User
exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (user) {
            return next(new createError('User already exists!', 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        const newUser = await User.create({
            ...req.body,
            password: hashedPassword,
        });

        // Assign JWT (json web token) to user
        const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET || 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(201).json({
            status: 'success',
            message: 'User Registered Successfully',
            token,
            user:{
                _id:newUser._id,
                name:newUser.name,
                email:newUser.email,
                role:newUser.role,

            },
        });
    } catch (error) {
        next(error);
    }
};

// Login User
exports.login = async (req, res, next) => {
    // Placeholder for login logic
    try{
        const{email,password}=req.body;
        const user=await User.findOne({email});
        if(!user) return next(new createError('User not found!',404));
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(!isPasswordValid){
            return next(new createError("Incorrect email or password",404))
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status:'success',
            token,
            message: 'Logged in successfully',
            user:{
                _id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,

            },
        })
    }catch(error){
        next(error);
    }
};
