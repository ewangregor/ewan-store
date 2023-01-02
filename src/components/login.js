import { Link } from 'react-router-dom';
import { useState } from 'react';
import './login.css'
const Login=()=>{
  
    const [showPassword, setShowPassword] = useState(true);
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const Loginhandle=(e)=>{
      e.preventDefault()
      if(!(email.includes("@"))){
        alert("Invalid email address")
      }
    }
    return(
        <div className="logincon">
        <form>
          <h1 id="loginhead">Login</h1>
          <label for="username">Username</label><br></br>
          <input type="text" id="username" name="username" onChange={e=>setEmail(e.target.value)}/><br></br>
          <label for="password">Password</label><br></br>
          <input onChange={e=>setPassword(e.target.value)}  type={showPassword ? "text" : "password"} id="password" name="password"/><br></br>
          {!showPassword?<i id="showpass" onClick={() => setShowPassword(!showPassword)} class="fa-regular fa-eye-slash"></i>:
          <i onClick={() => setShowPassword(!showPassword)} id="showpass" class="fa-regular fa-eye"></i>}
          
          <button onClick={Loginhandle} id="btn">Login</button>
        
          <p id="dont">Don't have an account? <span><Link id="span" to="/signup">Sign Up</Link></span></p>
        </form> 
      </div>
    )
}
export default Login;