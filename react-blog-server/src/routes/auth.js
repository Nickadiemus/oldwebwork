import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


let router = express.Router();

function validateInput(data){
  let errors = {}

  if(Validator.isEmpty(data.identifier)){
    errors.identifier = 'This field is required';
  }
  if(Validator.isEmpty(data.password)){
    errors.password = 'This field is required';
  }

  return{
    errors,
    isValid: isEmpty(errors)
  };
}


router.post('/', (req,res) => {
  const {identifier, password} = req.body;

  User.query({
    where: {username: identifier}
  }).fetch().then( (user) =>  {

    if(user){

      if(bcrypt.compareSync(password, user.get('password_encrypt'))){
        const token = jwt.sign({
          id: user.get('id'),
          username: user.get('username')
        }, config.key);
        console.log('sent token');
        res.json({token});
      }
      else {
          res.status(401).json(
            {
              errors: '401 Error'
            }
          );
      }
    }
    else {

      res.status(401).json({errors: {form: 'invalid credentials'}});
    }
  })
})

export default router
