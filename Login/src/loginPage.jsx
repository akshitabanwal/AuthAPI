import React,{useState} from 'react'
import {useNavigate} from "react-router-dom";
import "./login.css"
export const LoginPage = () => {
  const [account,toggleAccount]=useState('login');
  const [formData,setFormData]=useState({username:"",password:"",name:""});
  const navigate=useNavigate();
  
 

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
}
const toggleSignUp=()=>{
  if(account==='signup')
  {
      toggleAccount('login');
  }else{
      toggleAccount('signup');
  }
  setFormData({username:"",password:"",name:""});
}
const URL="http://localhost:5000/api";
const handleLogin=async()=>{
  try{
    const res=await fetch(`${URL}/login`,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        username:formData.username,
        password:formData.password,
      }),
      credentials:"include",
    });
    const data=await res.json();
    if(!res.ok){
      throw new Error(data.message||"oops Login failed!");
    }
    alert("You are logged in successfully");
    navigate("/secrets");
  }catch(err){
    alert(err.message||"error while logging in!")
  }
  
}
const handleSignup = async () => {
  try {
    const res = await fetch(`${URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        username: formData.username,
        password: formData.password,
      }),
      credentials: "include", 
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "oops Signup failed !");
    }

    alert("You have Signed up successfully!");
    navigate("/secrets");
  } catch (err) {
    alert(err.message || "Error while sighning up!");
  }
};
  return (
    <>
    < div className="box">
    {
   
                   ( account==='login')?(
    <div className="loginBox">
    <input  name='username' placeholder='Enter Username' value={formData.username}  onChange={handleChange}/>
    <input  name='password'placeholder='Enter Password'value={formData.password}  onChange={handleChange}/>
  
    <button onClick={handleLogin}variant='contained'>Login</button>
    <p style={{textAlign:'center'}}>Or</p>
    <button className="loginButton"onClick={toggleSignUp}>Create an account</button>
</div>
                   ):(
<div className='loginBox'>
    <input  name='name' placeholder='Enter Name'value={formData.name}  onChange={handleChange}/>
    <input  name='username' placeholder='Enter Username'value={formData.username}  onChange={handleChange}/>
    <input  name='password'placeholder='Enter Password'value={formData.password}  onChange={handleChange}/>
    <button variant='contained' onClick={handleSignup}>SignUp</button>
    <p style={{textAlign:'center'}}>Or</p>
    <button className="signUpButton"onClick={toggleSignUp}>Already have an account an account</button>
</div>
                   )
                  
    }
     </div>
</>
  
  )
}
export default LoginPage;
