import React, { useState } from "react";
import '../components/Form.css';
import Cres from '../components/images/cres.png'
import '../components/Form.css';
import Girl from '../components/images/girl.png'
import { FaFacebook, FaFacebookF, FaGoogle, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitter, IconName } from "react-icons/fa";
const Form = ()=>{
    const [email,setEmail]=useState("");
    console.log(email);
    const [password,setPassword]=useState("");

    const handleSubmit = ()=>{
        const data = {email:email,password:password}
        alert(JSON.stringify(data))
    }
    return(
        <div>
          
            <div className="form-container">
            <form onSubmit={handleSubmit}>
            
            <ul className="form-components">
          <img src={Cres}/>
          <h1>EddieShop</h1> 
          <p className="p-one">Don't have an Account?</p>
          <div className="sign">
          <a href ="#">Sign up</a>
          </div>
          
          <h2>Welcome Back</h2>
            <li className="one">
                <label for="mail">Your email</label><br/>
                <input type="text" id="email" name="address" placeholder="name@domain.com" onChange={(e)=>{setEmail(e.target.value)}}/>
            </li>
            <li className="two">
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="pass" placeholder="at least 8 characters" onChange={(e)=>{setPassword(e.target.value)}} />
            </li>
            </ul>

            <div className="check">
            
            <input type="checkbox" id="exampleCheck" /> 
            <label className="keep" for="password">Keep me </label>
            <label className="log" for="password">logged in </label>
            <div className="forgot">
            <a href ="#">Forgot Password?</a>
            </div>
           <button className="btn-login">Login</button>
            </div>     
             <hr className="line-one"/>   <hr className="line-two"/> 
              
             <p>Or </p>
             < a href="#" target= "blank"> <FaFacebookF className="face"/></a>
             < a href="https://myaccount.google.com/" target= "blank"> <FaGoogle className="link"/></a>
             < a href="https://www.instagram.com/n.onnny._/" target= "blank"> <FaInstagram className="insta"/> </a>
            
             <div className="girly">
             <img  src={Girl}/>
             </div>
             
          </form>  
            </div> 
            
        </div>
    )
}

export default Form;
