const express=require('express');
const router=express.Router();
const {SignUpValidation,LoginValidation}=require('../middlewares/middleware');
const {signUp,login} =require('../controllers/controller');
router.post('/signUp',SignUpValidation,signUp);
router.post('/login',LoginValidation,login);
module.exports=router;