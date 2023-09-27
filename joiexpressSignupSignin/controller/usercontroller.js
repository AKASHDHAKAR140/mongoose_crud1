const signupdata = require("../models/signup1")
const validateRequest = require('../middelware/validation')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "oiuytremnbvcygvgbvfcdbvcnxzmhfdjs"
const Joi = require('joi');
const expiresIn = "10s";


// const signup1 = async (req, res) => {

//     const { username, email, password } = req.body;
//     try {
//         const existinguser = await signupdata.findOne({ email: email })
//         if (existinguser) {
//             res.json({ message: "user allready find" })
//         }
//         // console.log(password)
//         const hashpassword = await bcrypt.hash(password, 10)
//         const result = await signupdata.create({
//             username: username,
//             email: email,
//             password: hashpassword
//         })
//         res.status(200).json({ msg: "succesfully", user: result })
//     } catch (error) {
//         res.status(500).json("something went wrong")
//     }
// }

const signup2 = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await signupdata.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await signupdata.create({
            username: username,
            email: email,
            password: hashPassword
        });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong" });
    }
};


async function validationMiddleware(req, res, next) {
    const Schema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().min(2).required(),
    });
    validateRequest(req, next, Schema);
}


const signin = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const existinguser = await signupdata.findOne({ email: email })
        if (!existinguser) {
            return res.status(404).json({ message: "User not found" })
        }
        const matchpassword = await bcrypt.compare(password, existinguser.password)
        if (!matchpassword) {
            return res.status(404).json({ message: "Invalid credentials" })
        }
        // Set the token expiration to 1 hour (3600 seconds)
        const token = jwt.sign({ email: existinguser.email, id: existinguser._id }, SECRET_KEY, { expiresIn })
        console.log('Generated Token:', token);
        return res.status(200).json({ message: "Successfully", user: existinguser, token: token })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Something went wrong" })
    }

}


module.exports = { signup2, signin, validationMiddleware } 
