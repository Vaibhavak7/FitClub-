import React from 'react'
import {plansData} from '../../data/plansData';
import './Plans.css';
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='Plans'>
    <div className="blur plans-bur1"></div>
    <div className="blur plans-bur2"></div>
      <div className="plans-head" style={{gap:'2rem'}}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      
      {/* plans card */}
    <div className="plansq">
    {
        plansData.map((plan,i)=>(
            <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.name}</span>
                <span>$ {plan.price}</span>
                <div className="features">
                    {plan.features.map((feat,i)=>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feat}</span>
                            </div>
                    ))}
                </div>
                <div className="bfn">
                    <span>See more benefits </span>
                </div>
                <button className="btn">Join Now</button>
            </div>
        ))
    }
    </div>
    </div>
  )
}

export default Plans
