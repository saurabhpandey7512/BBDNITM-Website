import React from 'react'
import './Programs.CSS'
import program_1 from '../../assets/B.tech.jpeg'
import program_2 from '../../assets/MBA1.jpeg'
import program_3 from '../../assets/M.Tech.png'
import program_icon_1 from '../../assets/b.tech_icon.png'
import program_icon_2 from '../../assets/MBA_icon.jpeg'
import program_icon_3 from '../../assets/m.tech_icon.jpeg'

const Programs = () => {
  return (
    <div className='programs' >
       <div className="program"> 
       <img src={program_1} alt="" />
       <div className="caption">
        <img src={program_icon_1} alt="" />
        <p>B.Tech</p>
       </div>
       </div>

      <div className="program"> 
       <img src={program_2} alt="" />
       <div className="caption">
        <img src={program_icon_2} alt="" />
        <p>MBA</p>
       </div>
       </div>

      <div className="program"> 
       <img src={program_3} alt="" />
       <div className="caption">
        <img src={program_icon_3} alt="" />
        <p>M.Tech</p>
       </div>
       </div>
    </div>
     
     

  )
}

export default Programs