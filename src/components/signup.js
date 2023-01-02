import './signup.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Signup=()=>{
  const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const [confirmpassword,setConfirmPassword]= useState("")
  const Signuphandle=(e)=>{
    e.preventDefault()
    if(!(email.includes("@"))){
      alert("Invalid email address")
    }
    if(password!==confirmpassword){
      alert("Passwords doesn't match")
    }
    if(email==="" || password==="" || confirmpassword===""){
      alert("All inputs are required")
    }
  }
    return(
        <div className='signupcon'>
        <div className="logincon">
        <form>
          <h1 id="signhead">Sign Up</h1>
          <label for="username">Username</label><br></br>
          <input type="text" id="username" name="username" onChange={e=>setEmail(e.target.value)}/><br></br>
          <label for="password">Password</label><br></br>
          <input type="password" id="password" name="password" onChange={e=>setPassword(e.target.value)}/><br></br>
          <label for="password">Confirm Password</label><br></br>
          <input type="password" id="password" name="password" onChange={e=>setConfirmPassword(e.target.value)}/><br></br>
          <button onClick={Signuphandle} id="btnsignup">Signup</button>
          <p id="dont">Already have an account? <span><Link id="span" to="/">Login</Link></span></p>
        </form> 
      </div>
      </div>
    )
}
export default Signup;