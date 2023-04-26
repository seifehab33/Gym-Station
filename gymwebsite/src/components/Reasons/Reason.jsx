import React from 'react'
import './Reason.css'
import img1 from "../../assets/image1.png"
import img2 from "../../assets/image2.png"
import img3 from "../../assets/image3.png"
import img4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
const Reason = () => {
  return (
    <section className="reasons" id="reasons">
        <div className="left-r">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div className='heading-r'>
                <span className='stroke-text'>Why </span>
                <span>choose us ?</span>
            </div>
            <div className='details-r'>
                <div><img src={tick} alt=""></img><span>OVER 140+ EXPERT COACHS</span></div>
                <div><img src={tick} alt="" /><span>train smarter and faster than before</span></div>
                <div><img src={tick} alt="" /><span>1 free program for new member</span></div>
                <div><img src={tick} alt="" /><span>reliable partners</span></div>
            </div>
            <span>our partners</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Reason