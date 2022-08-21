import React from 'react'
import style from "./loginForm.module.css";
import { BsFacebook, BsInstagram, BsGoogle, BsSkype } from 'react-icons/bs';
import { IoLogoTwitter } from 'react-icons/io';

export default function loginForm() {
    const styleicons = {fontSize: "1.4em"}
  return (
    <div className={style.loginForm}>
        <div className={style.toptext}>
        <p>Login Here</p>
        </div>
        <form className={style.input} action="">
            <input className={style.InputFields1} type="email" placeholder="Enter Email Here"/>
            <a href="#" className={style.clearButton1}>x</a>
            <input className={style.InputFields2} type="password" placeholder="Enter Password Here"/>
            <a href="#" className={style.clearButton2}>x</a>
            <button className={style.loginButton}>Login</button>
        </form>
        <p className={style.lowtext1}>Don't have an account?</p>
        <div className={style.signuptext}>
        <a href="#" className={style.lowtext2}>Sign up</a>
        
        <p className={style.lowtext3}>here</p>
        </div>
        <p className={style.lowtext4}>Login with</p>
        <div className={style.socialmediaicons}>
        <a href=""><BsFacebook style={styleicons}/></a>
        <a href=""><BsInstagram style={styleicons}/></a>
        <a href=""><IoLogoTwitter style={styleicons}/></a>
        <a href=""><BsGoogle style={styleicons}/></a>
        <a href=""><BsSkype style={styleicons}/></a>
        
        
        
            
        </div>
      
    </div>
  )
}
