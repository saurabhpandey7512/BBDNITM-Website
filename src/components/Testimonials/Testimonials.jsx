import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.jpeg'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Saurabh.jpg'
import user_2 from '../../assets/Rohit.jpg'
import user_3 from '../../assets/Deevanshu.jpg'
import user_4 from '../../assets/Shakib.jpg'

const Testimonials = () => {

  const slider = useRef();
  let tx=0;

const slideForward = ()=>{
if(tx > -50){
  tx -=25;
}
slider.current.style.transform =`translateX(${tx}%)`;
}

const slideBackward = ()=>{
  if(tx < 0){
    tx +=25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
  
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>

        <div className="slider">

             <ul ref={slider}>
                 <li>
                       <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                    <div>
                                       <h3>Saurabh Pandey</h3>
                                       <span>BBDNITM, LUCKNOW</span>
                                    </div>
                             </div>
                             <p> Good college with vibe campus there are multiple building in College, 
                              which are conducting multiple courses, almost all the branches of BTech .
                              During placement scenario it's decent colleg And the classrooms are good and
                               environmental friendly means no AC rooms</p>
                       </div>
                 </li>

                 <li>
                       <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                    <div>
                                       <h3>Rohit Maurya</h3>
                                       <span>BBDNITM, LUCKNOW</span>
                                    </div>
                             </div>
                             <p>Fest organized by the college and infrastructure is great to learn 
                              and participate in the events.Labs for doing practical was good and
                               the faculty also helps to perform practical.</p>
                       </div>
                 </li>

                 <li>
                       <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                    <div>
                                       <h3>Deevanshu Gupta</h3>
                                       <span>BBDNITM, LUCKNOW</span>
                                    </div>
                             </div>
                             <p>The college placements are also great there are different companies come and 
                              it is depends on you how well you got placed .Senior are also very helpful to 
                              juniors and help a lot</p>
                       </div>
                 </li>

                 <li>
                       <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                    <div>
                                       <h3>Shakib Khan</h3>
                                       <span>BBDNITM, LUCKNOW</span>
                                    </div>
                             </div>
                             <p>International standards stadium that has hosted Khelo India University Games,
                               Ranji Matches and even Mumbai Indians practice matches.Faculty is supportive 
                               and overall grooming of an student is decent and at last quite interactive faculty</p>
                       </div>
                 </li>
            </ul>
       </div>
        
    </div>
  )
}

export default Testimonials