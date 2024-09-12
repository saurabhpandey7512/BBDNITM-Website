import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.jpeg'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.jpeg'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white_arrow.png'




const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "67ad0383-990f-4e7d-9593-93693c117434");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>

      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>  Feel free to reach out through form or find contact 
            information below. Your feedback, question, and suggestion 
            are important to us as we strive to provide exceptional
            service to our collage community. </p>

        <ul>
            <li><img src={mail_icon} alt="" /> saurabhpandey2703@gmail.com</li>
            <li><img src={phone_icon} alt="" /> +91 7619068517</li>
            <li><img src={location_icon} alt="" /> Akhilesh Das Nagar , BBD <br />Lucknow, Uttar 
            Pradesh , India</li>
        </ul>

      </div>


      <div className="contact-col">
        <form onSubmit={onSubmit} >
          <lable>Your name</lable>
          <input type='text' name='name' placeholder='Enter your full Name' required />
          <lable>Phone Number</lable>
          <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
          <lable>Email ID</lable>
          <input type='email' name='email' placeholder='Enter your Email ID' required/>
          <lable>Writye your message here</lable>
          <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact