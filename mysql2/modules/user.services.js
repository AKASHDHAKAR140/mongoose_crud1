const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const SECRET_KEY ="iuytr,mnbvc87654322456ijhbvmngfrf";
const signup = async (params) => {
    const existingUser = await db.Model.findOne({ where: { email: params.email } });
    if (existingUser) {
        throw 'Email is already registered';
    }
    const admin = new db.Model(params);
    const hash = await bcrypt.hash(params.passWord, 10);
    admin.hash = hash;
    const user = await admin.save();
    return user;
    // const { userName, email, passWord } = req.body;
    // try {
    //     const existingUser = await db.Model.findOne({ where: { email: email } });
    //     if (existingUser) {
    //         return res.status(400).json({ message: "User already exists" });
    //     }
    //     console.log(passWord)
    //     const hashPassword = await bcrypt.hash(passWord, 10);

    //     const newUser = await db.Model.create({
    //         userName: userName,
    //         email: email,
    //         passWord: hashPassword
    //     });

    //     res.status(201).json({ message: "User created successfully", user: newUser });
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ message: "Something went wrong" });
    // }
}

const signin =  async (req,res)=>{
    const {email,passWord}= req.body;
  try {
    const existingUser = await db.Model.findOne({where:{email:email}})
    if(!existingUser){
        return res.status(404).json({message:"user not found"})
    }
    const matchPassword = await bcrypt.compare(passWord,existingUser.passWord)
    if(!matchPassword){
        return res.status(404).json({message:"invalid credential"})
    }
    const token = jwt.sign({email:existingUser.email,id:existingUser.id},SECRET_KEY)
    res.status(200).json({message:"succesfully",user:existingUser,token:token})
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }


}

module.exports = {signup,signin}