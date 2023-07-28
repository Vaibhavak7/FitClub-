import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import NumberC from 'number-counter';

import {motion} from 'framer-motion';
const Hero = () => {
  const transition={type:'spring',duration:3}
  return (
    <div className="hero">
    <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Header />
        {/* Best AD */}
        <div className="the-best">
        {/* motion is used to add transition to the div  */}
          <motion.div
          initial={{left:'200px'}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
          <span>The Best Fitness Club In Pune</span>
        </div>
        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div className="smal">
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
            <div>
            <span>
              <NumberC end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span>expert coaches</span>
            </div>
            <div>
            <span>
            <NumberC end={978} start={900} delay='4' preFix="+"/></span>
            <span>members joined</span>
            </div>
            <div>
            <span><NumberC end={50} start={25} delay='4' preFix="+"/></span>
            <span>fitness programs</span>
            </div>
        </div>
        {/* HERO BUTTONS */}
        <div className="hero-buttons">
            <buttons className="btn">GET STARTED </buttons>
            <buttons className="btn">LEARN MORE</buttons>
        </div>
      </div>
      <div className="right-hero"> 
      <buttons className="btn">Join Now</buttons>

      <motion.div 
       initial={{right:'-1rem'}}
          whileInView={{right:'4rem'}}
          transition={transition}
      className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate </span>
        <span>116 bpm</span>
      </motion.div>
      {/* hero image */}
      <img src={hero_image} alt="" className="hero-image" />
      <motion.img
      initial={{right:'11rem'}}
          whileInView={{right:'20rem'}}
          transition={transition} 
      src={hero_image_back} alt="" className="hero-image-back" />
      {/* /calories */}
      <motion.div 
      initial={{right:'37rem'}}
          whileInView={{right:'28rem'}}
          transition={transition}
      className="calories" style={{backgroundColor: "gray"}}>
        <img src={Calories} alt="" className="cal" />
        <div>
        <span>Calories Burned</span>
        <span>220 kcal</span>
        </div>
      </motion.div>
      </div>
    </div>
  );
};

export default Hero;
