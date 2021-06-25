export default function  ValidationInfo (values){
    let errors = {}

  if(!values.username.trim()){
      errors.username = "Username required"
  }

  //Email

  if(!values.email){
      errors.email = "Email required"
  } else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/i.test(values.email)){
      errors.email = "Email addres is invalid"
  }

  //password

  if(!values.password){
      errors.password = "Password is required"
  } else if (values.password.length < 6) {
      errors.password = "Paswsword needs to be 6 character or more"
  }

  //password2

  if(!values.password){
      errors.password2 = 'Password is required'
  } else if(values.password2 !== values.password){
      errors.password2 = "Password do not match"
  }

  return errors;

} 

