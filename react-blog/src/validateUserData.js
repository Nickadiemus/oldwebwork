//main import(s)
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

//route for users post
export default function validateInput(data)  {
  let errors = {};
  console.log(data);
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
