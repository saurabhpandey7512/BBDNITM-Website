import React from 'react'
import './About.css'
import about_img from '../../assets/Banner2.jpg'
import play_icon from '../../assets/video-icon.jpeg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
       <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={ play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
        
        </div> 


       <div className="about-right">
        <h3>ABOUT COLLAGE</h3>
        <h2>Nurturing Tomorrow's Leader Today</h2>
        <p>BBDITM is the exact platform from where the journey starts to the 
            corporate world. We aspire you to think big and leap big. Aspire 
            for working with best MNC's.</p>
        <p>BBDITM aims to prepare its students via MBA for both, the corporate 
                and the non-corporate world.<br/>  BBDITM is committed to provide the
                 excellence in teaching, learning and research and develop the
                  cream of the crop in all the field of education.</p>

        <p>The supportive faculty, robust placement record, excellent facilities,
                     and vibrant campus life make it an ideal place for students to pursue 
                     their highe </p>     
        </div> 

    </div>
  )
}

export default About