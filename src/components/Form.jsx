import React, { useState } from 'react';

const Form = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("")
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("")
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
  };

  const handleFirstName = (e) =>{
    setFirstName(e.target.value);
    if(e.target.value.length < 2 ){
      setFirstNameError("First name must be at least 2 characters!")
    } else {
      setFirstNameError("")
    }
  };

  const handleLastName = (e) =>{
    setLastName(e.target.value);
    if(e.target.value.length < 2 ){
      setLastNameError("Last name must be at least 2 characters!")
    } else {
    setLastNameError("")
    }
  };

  const handleEmail = (e) =>{
    setEmail(e.target.value);
    if(e.target.value.length < 2 ){
      setEmailError("Email must be at least 2 characters!")
    } else {
    setEmailError("")
    }
  };

  const handlePassword = (e) =>{
    setPassword(e.target.value);
    if(e.target.value.length < 8 ){
      setPasswordError("Password must be at least 8 characters!")
    } else {
      setPasswordError("")
    }
  };

  const handleConfirmPassword = (e) =>{
    setConfirmPassword(e.target.value);
    if(e.target.value.length != password){
      setConfirmPasswordError("Confirm password must match Password!")
    } else {
      setConfirmPasswordError("")
    }
  };

  return (        
  <form onSubmit={ createUser }>
    <div>
        <label>First Name: </label> 
        <input value={firstName} type="text" onChange={ (e) => handleFirstName(e) } />{
            firstNameError ? 
            <p style ={{color: 'red'}}>{ firstNameError }</p>:
            ''
        }
    </div>
    <div>
        <label>Last Name: </label> 
        <input type="text" onChange={ (e) => handleLastName(e) } />{
          lastNameError ? <p style ={{color: 'red'}}>{ lastNameError }</p>:
          ''
        }
    </div>
    <div>
        <label>Email Address: </label> 
        <input type="text" onChange={ (e) => handleEmail(e) } />{
          emailError ? <p style ={{color: 'red'}}>{ emailError }</p>:
          ''
        }
    </div>
    <div>
        <label>Password: </label>
        <input type="text" onChange={ (e) => handlePassword(e) } />{
          passwordError ? <p style ={{color: 'red'}}>{ passwordError}</p>:
            ''
        }
    </div>
    <div>
        <label>Confirm Password: </label>
        <input type="text" onChange={ (e) => handleConfirmPassword(e) } />{
          confirmPasswordError ? <p style ={{color: 'red'}}>{ confirmPasswordError}</p>:
            ''
        }
    </div>
    <input type="submit" value="Create User" />
    <div>
      First Name: {firstName}
    </div>
    <div>
      Last Name: {lastName}
    </div>
    <div>
      email : {email}
    </div>
    <div>
      password : {password}
    </div>
    <div>
      Confirm Password : {confirmPassword}
    </div>
  </form>
  );
};

export default Form;
