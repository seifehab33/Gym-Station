import React from 'react'
import "./Footer.css"
import Github from "../../assets/github.png"
import Instgram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"
const Footer = () => {
  return (
    <div className="Footer-container">
        <div className="footer">
            <div className='social-links'>
                <img src={Github} alt="" /><img src={Instgram} alt="" /><img src={LinkedIn} alt="" />
            </div>
            <div className="logo-f">
                <img src={logo} alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default Footer