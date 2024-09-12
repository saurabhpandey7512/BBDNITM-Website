import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/full_campus.jpg'
import gallery_2 from '../../assets/audutorium.1jpeg.jpeg'
import gallery_3 from '../../assets/library.jpg'
import gallery_4 from '../../assets/Stadium1.jpeg'
import white_arrow from '../../assets/white_arrow.png'
import gallery_5 from '../../assets/Classroom.jpeg'
import gallery_6 from '../../assets/Stadium.jpeg'
import gallery_7 from '../../assets/cantein.jpeg'
import gallery_8 from '../../assets/temple3.jpeg'


const Campus = () => {
  return (
    <div className='campus'>
        
        <div className="gallery">
        <img src={gallery_1}alt="" />
        <img src={gallery_2}alt="" />
        <img src={gallery_3}alt="" />
        <img src={gallery_4}alt="" />
     
        </div>
  
        <div className="gallery">
        <img src={gallery_5}alt="" />
        <img src={gallery_6}alt="" />
        <img src={gallery_7}alt="" />
        <img src={gallery_8}alt="" />
        </div>

        <button className='btn dark-btn'>See more Here <img src={white_arrow} alt='' /></button>

    </div>
  )
}

export default Campus