import React from "react";
import Header from "./Header/Header";
import heroimage from "../images/hero_image.png";
import hero_image_back from "../images/hero_image_back.png";
import heart from "../images/heart.png";
import calories from "../images/calories.png";
import "./Hero.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fintness program</span>
          </div>
        </div>
        <div className="btns-hero">
          <button className="btn">
            <div></div>
            <span>Get started</span>
          </button>
          <button className="btn">
            <div></div>
            <span>Learn More</span>
          </button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={heroimage} alt="" className="heroImage" />
        <img src={hero_image_back} alt="" className="heroImageback" />
        <div className="calories">
          <img src={calories} alt="" className="caloriesimg" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
