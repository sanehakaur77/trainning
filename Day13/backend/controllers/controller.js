const User = require('../models/User');
const signUpSchema=require('../middlewares/middleware');
const signUp = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;

    const isExist = await User.findOne({ email });
    if (isExist) {
      return res.status(401).send('User already exists'); 
    }

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).send('User created successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
const login=async(req,res)=>{
  try{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user) return res.status(401).send('Invalid email or password');
     if(user.password=== password){
      return res.status(200).send('Login successful');
     }
     res.status(401).send('Invalid email or password');
  }
  catch(err){
    res.status(400).send(err.message);
  }
}

module.exports = { signUp,login };
