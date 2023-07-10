const userModel = require("../models/usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";
const signUp = async (req, res) => {
  //Exisiting User Check
  //Hash Password
  //Create User
  //Token Generation

  const { username, password, email } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists!!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //salt rounds-10
    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });

    //token gener
    //PAYLOAD AND SECRET KEY
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      SECRET_KEY
    );
    res.status(201).json({
        user:result,
        token:token
    })
  } catch (error) {

    console.log(error);
    res.status(500).json({
        message:"Something Went Wrong"
    })
  }
};
const signIn = async(req, res) => {

    const{email,password}=res.body;
    try{
    const existingUser = await userModel.findOne({ email: email });
    if(!existingUser){
        return res.status(404).json({
            message:"User not found!"
        })
    }
    //match credentials
    const matchPassword =await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
        return res.send(400).json({
            message:"Invalid User!"
        })
    }
    //token
    const token = jwt.sign(
        {
          email: existingUser.email,
          id: existingUser._id,
        },
        SECRET_KEY
      );
      res.status(201).json({
        user:existingUser,
        token:token
    })

    }
    catch(error){
    console.log(error);
    res.status(500).json({
        message:"Something Went Wrong"
    })
    }
};

module.exports = {  
  signUp,
  signIn,
};
