import { useState } from 'react';
// import { FaEyeSlash } from 'react-icons/fa';
// import { FaEye  } from 'react-icons/fa';
import '../components/form.css';

function RegisterForm(){

let mailFormat=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/   
let NoSpace= /^\S*$/; 
let passwordLowerCase=/(?=.*[a-z])/
let passwordUpperCase=/(?=.*[A-Z])/
let passwordOneDigit=/(?=.*[0-9])/
let specialChar=/(?=.*[!@#$%^&*])/
let passwordLength=/(?=.{8,})/


  const [user,setUser]=useState({
    name:"",
    email:"",
    username:"",
    password:"",
    matchedpassword:""
  })

  const [passwordType, setPasswordType] = useState("password");


  const [userErrors,setUserErrors]=useState({
    nameError:"",
    emailError:"",
    usernameError:"",
    passwordError:"",
    matchedpasswordError:""

});



  const handleUser=(event)=>{
    console.log(event.target.id, event.target.value)
    setUser({
        ...user,
        [event.target.id]:event.target.value
    })
    handleError(event.target.id,event.target.value)
  }


  
  const togglePassword =(event)=>{
    event.preventDefault();
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  };



  const handleError=(field,value)=>{
    
    switch(field){
        case "name" :
        setUserErrors({
          ...userErrors,
           nameError: value.length ===0 ? "this field is required" :""
        }) 
        break;

        case "email" :
        setUserErrors({
          ...userErrors,
           emailError: value.length ===0 ? "this field is required" : mailFormat.test(value) ? "" : "This mail is invalid"
        })
        break;

        case "username" :
            setUserErrors({
              ...userErrors,
               usernameError: value.length ===0 ? "this field is required" : NoSpace.test(value)? "" :"userName Shouldn't have white Space"
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

        case "matchedpassword" :
            setUserErrors({
              ...userErrors, 
            
               matchedpasswordError: value.length ===0 ? "this field is required" : user.password===value ? "password confirmed": "password isn't the same"
              
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
    <h1>Register Form</h1>

    <form >

    <div className="col-12">
        <label htmlFor="inputName" className="form-label">Name</label>
        <input type="text" className={`form-control ${userErrors.nameError ? "border-danger" : " " }`} id="name" placeholder="Enter your Name" value={user.name} onChange={(e)=>{handleUser(e)}}/>
        <div id="nameHelp" className="form-text text-danger">{userErrors.nameError}</div>

   </div>

 
    <div className="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" className={`form-control ${userErrors.emailError ? "border-danger" : " " }`} id="email" aria-describedby="emailHelp" placeholder="Enter your E-mail" value={user.email} onChange={(e)=>{handleUser(e)}}/>
        <div id="emailHelp" className="form-text text-danger">{userErrors.emailError}</div>
   </div>


     <div className="col-12">
        <label htmlFor="inputuserName" className="form-label">Username</label>
        <input type="text" className={`form-control ${userErrors.usernameError? "border-danger" : " " }`} id="username" placeholder="Enter your Username" value={user.username} onChange={(e)=>{handleUser(e)}}/>
        <div id="usernameHelp" className="form-text text-danger">{userErrors.usernameError}</div>

   </div>


    
   <div className="input-group">
        <label htmlFor="inputPassword" className="form-label col-md-12 ">Password</label>
        <input  type={passwordType} className= { `form-control ${userErrors.passwordError? "border-danger" : " " } `}  id="password" placeholder="Enter your password" value={user.password} onChange={(e)=>{handleUser(e)}} />  
        {/* <button className="btn btn-outline-light" onClick={(e)=>{togglePassword(e)}}>
                     { passwordType==="password"? <FaEyeSlash/> :<FaEye/>}</button> */}
        <div id="passwordHelp" className="form-text text-danger col-md-12">{userErrors.passwordError} </div>


</div>

<div className="input-group">
        <label htmlFor="inputRePassword" className="form-label col-md-12 ">Confirm Password</label>
        <input  type={passwordType} className= { `form-control ${userErrors.matchedpasswordError? "border-danger" : " " } `}  id="matchedpassword" placeholder="Confirm your password" value={user.matchedpassword} onChange={(e)=>{handleUser(e)}} />  
        {/* <button className="btn btn-outline-light" onClick={(e)=>{togglePassword(e)}}>
                     { passwordType==="password"? <FaEyeSlash/> :<FaEye/>}</button> */}
        <div id="passwordHelp" className="form-text text-danger col-md-12">{userErrors.matchedpasswordError} </div>


</div>

     
    <button type="submit" className="btn btn-light">Submit</button>
  </form>
  
  </>


    )
}

export default RegisterForm;
