
// import { FaEyeSlash } from 'react-icons/fa';
// import { FaEye  } from 'react-icons/fa';
import '../components/form.css';


import { useState } from "react";
import { useHistory, useLocation } from 'react-router-dom';

function Login() {


  const history=useHistory();
  const location=useLocation();

  console.log(history)
  // history.push("/SignUp")


  let mailFormat=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/   
  let passwordLowerCase=/(?=.*[a-z])/
  let passwordUpperCase=/(?=.*[A-Z])/
  let passwordOneDigit=/(?=.*[0-9])/
  let specialChar=/(?=.*[!@#$%^&*])/
  let passwordLength=/(?=.{8,})/
  
  
    const [user,setUser]=useState({
      email:"",
      password:"",
    });

    const [passwordType, setPasswordType] = useState("password");

    const [userErrors,setUserErrors]=useState({
      emailError:"",
      passwordError:"",
  
   });

 

  const togglePassword =(event)=>{
    event.preventDefault();
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  };


  const handleSumbit=(event)=>{
    event.preventDefault()
};
  


  
  
   const handleUser=(event)=>{
      console.log(event.target.id, event.target.value)
      setUser({
          ...user,
          [event.target.id]:event.target.value
      })
      handleError(event.target.id,event.target.value)
    }
  
  
  
    const handleError=(field,value)=>{
      
      switch(field){
  
          case "email" :
          setUserErrors({
            ...userErrors,
             emailError: value.length ===0 ? "this field is required" : mailFormat.test(value) ? "" : "This mail is invalid"
          })
          break;
  
          case "password" :
              setUserErrors({
                ...userErrors, 
              
                 passwordError: value.length ===0 ? "this field is required" : 
                 passwordLowerCase.test(value)? passwordUpperCase.test(value)? passwordOneDigit.test(value)? specialChar.test(value)? passwordLength.test(value)? ""
                 :"password shouldn't be less than 8 "
                 :"password should contain at least one Special Character"
                 :"password should contain at least One Digit"
                 : "password Should contain 1 UpperCase"
                 : `passwors Should contain 1 lowerCase`
              })
          break;
  
  
          default:
  
            setUserErrors({
              ...userErrors,
            })
  
        }
  
    }
  
  
  
  
  
      return(
      <>
      <h1>Login Form</h1>

  
      <form >
  
      <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className={`form-control ${userErrors.emailError ? "border-danger" : " " }` } id="email" aria-describedby="emailHelp" placeholder="Enter your E-mail" value={user.email} onChange={(e)=>{handleUser(e)}}/>
          <div id="emailHelp" className="form-text text-danger">{userErrors.emailError}</div>
     </div>


<div class="input-group">
        <label htmlFor="inputPassword" className="form-label col-md-12 ">Password</label>
        <input  type={passwordType} className= { `form-control ${userErrors.passwordError? "border-danger" : " " } `}  id="password" placeholder="Enter your password" value={user.password} onChange={(e)=>{handleUser(e)}} />  
        {/* <button className="btn btn-outline-light" onClick={(e)=>{togglePassword(e)}}>
                     { passwordType==="password"? <FaEyeSlash/> :<FaEye/>}</button> */}
        <div id="passwordHelp" className="form-text text-danger col-md-12">{userErrors.passwordError} </div>


</div>


      <button type="submit" className="btn btn-light" onSubmit={(e)=>{handleSumbit(e)}}>Submit</button>

      
    </form>


    


    
</>
    
  )
      }
  export default Login;
