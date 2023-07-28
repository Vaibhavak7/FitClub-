import React, { useRef, useState } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';
const Join = () => {
    const form=useRef();
    const [inp,setinp]=useState("");
  const handle=(e)=>{
    setinp(e.target.value);
  }
    const sendEmail = (e) => {
      // const [inp,setinp]=useState("");
        e.preventDefault();
    
        emailjs.sendForm('service_00vhwtt', 'template_l84ei3o', form.current, 'lIOXYmnvsPsHT8M8H')
          .then((result) => {
              console.log(result.text);
              alert("ThankYou....!!!!")
          }, (error) => {
              console.log(error.text);
          });
        setinp("");
      };
      // const sendEmail1 = (e) => {
      //   e.preventDefault();
    
      //   console.log("ALI");
      // };
  return (
    <div  className='Join' id='join-us'>
    <div className="left-j">
    <hr />
        <div>
        <span className='stroke-text'>READY TO </span>
        <span>LEVEL UP</span>
        </div>
        <div>
        <span>YOUR BODY </span>
        <span className='stroke-text'>WITH US?</span>
        </div>
    </div>
    <div className="right-j"></div>
      <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
        <input type="email" name="user_email" placeholder='Enter Your Name' value={inp} onChange={handle}/>
        <button className='btn btn-j' value='clear Filds' >Join Now</button>
      </form>
    </div>
  )
}

export default Join
