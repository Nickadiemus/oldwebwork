import express from 'express';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import bcrypt from 'bcrypt';
import User from '../models/user';


//route for users post
let router = express.Router();

function validateInput(data)  {
  let errors = {};

  if(validator.isEmpty(data.username)) {
    errors.username = 'this field is required';
  }
  if(!validator.isEmail(data.username)){
    errors.username = 'email is invalid';
  }
  if(validator.isEmpty(data.password)) {
    errors.password = 'this field is required';
  }
  if(validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = 'this field is required';
  }
  if(!validator.equals(data.password, data.passwordConfirm)){
    errors.passwordConfirm = 'password must match';
  }

  console.log(isEmpty(errors));
  return{
    errors,
    isValid: isEmpty(errors)
  }
}


router.post('/', (req,res)=> {
  setTimeout(()=> {
    const {errors, isValid } = validateInput(req.body);
    console.log(isValid);
    if(isValid){
      //get data
      const {username, password } = req.body;
      //hash password using bcrypt
      const password_encrypt = bcrypt.hashSync(password, 10);

      //save data to postgresql blogdb
      User.forge({
        username, password_encrypt
      }, {hasTimestamps: true}).save()
        .then(user => res.json({ success: true}))
        .catch(err => res.status(500).json({ error: err}));

    }else{
      res.status(400).json(errors)
    }
  }, 2000);
});

export default router;
