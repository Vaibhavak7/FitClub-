import React from 'react'
import './Programs.css';
import {programsData} from '../../data/programsData';
import rightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
      <div className="Programs" id='programs'>
            {/* Making header for this e=section */}
      
      <div className="programs-header">
        <span className='stroke-text'>Explore our</span>
        <span>Programs</span>
        <span className='stroke-text'>To shape you</span>
      </div>
    <div className="program-categories">
        {programsData.map((pro)=>(
            <div className="category">
                {pro.image}
                <span>{pro.heading}</span>
                <span>{pro.details}</span>
                <div className="join-now">
                    <span>Join Now</span><img src={rightArrow} alt="" />
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default Programs
