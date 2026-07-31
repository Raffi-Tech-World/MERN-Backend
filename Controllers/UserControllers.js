const User = require("../Models/User");

const signupUser = async (req, res) => {
  try {
    const { name, email, mobile, password, confirmPassword } = req.body;
    const newUser= new User({
      name, 
      email, 
      mobile, 
      password, 
      confirmPassword
  });
  const savedUser= await newUser.save();
  res.status(200).json({
    message:"user register successfully",
    data:savedUser,
  });
  } catch (error) {
    
    res.status(400).json({
      message:"User not register successfully",
      error:error.message,
    });
  }
};


module.exports={
  signupUser
}