import React from "react";
import '../components/Form.css';
import Cres from '../components/images/cres.png'
import '../components/Form.css';
import Girl from '../components/images/girl.png'
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedin, FaLinkedinIn, FaTwitter, IconName } from "react-icons/fa";
const Form = ()=>{
    return(
        <div>
          
            <div className="form-container">
            <form>
            
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
                <input type="text" id="email" name="address" placeholder="name@domain.com"/>
            </li>
            <li className="two">
                <label for="password">Password</label><br/>
                <input type="password" id="password" name="pass" placeholder="at least 8 characters" />
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
             <FaFacebookF className="face"/>
             <FaLinkedinIn className="link"/>
             <FaInstagram className="insta"/> 
             <div className="girly">
             <img  src={Girl}/>
             </div>
             
          </form>  
            </div> 
            
        </div>
    )
}

export default Form;
