import React from 'react'
import "./Testimonlios.css"
import {testimonialsData} from "../../data/testimonialsData"
import { useState } from 'react'
import RightArrow from "../../assets/rightArrow.png"
import LeftArrow from "../../assets/leftArrow.png" 
const Testimonlios = () => {
    const [Selected,setSelected] = useState(0)
    const tLength = testimonialsData.length;

  return (
    <section className="Testimonlios" id="Testimonlios">
        <div className="left-t">
            <span>Testimonlios</span><span className='stroke-text'>What they</span><span>say about us</span>
            <span>{testimonialsData[Selected].review}</span>
            <span>
                <span style={{color:'var(--orange)'}}>{testimonialsData[Selected].name} </span>
                - {testimonialsData[Selected].status}
            </span>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img src={testimonialsData[Selected].image} alt="" />
            <div className="arrows">
                <img onClick={()=>
                {
                    Selected==0?setSelected(tLength-1):setSelected((prev)=> prev-1)    
                }} 
                src={LeftArrow} alt="" />
                <img onClick={()=>
                {
                    Selected==tLength-1?setSelected(0):setSelected((prev)=>prev+1)
                }} 
                src={RightArrow} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Testimonlios