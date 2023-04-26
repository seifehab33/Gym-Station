import React from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
const Join = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3eirv94', 'template_rh1vc0q', form.current, 'dyXtQBXmKKXbvKt0J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="Join" id="Join">
        <div className="Left-j">
            <div></div>
            <span><span className='stroke-text'>READY TO </span>LEVEL UP</span>
            <span>YOUR BODY <span className='stroke-text'>WITH US?</span></span>
        </div>
        <div className="Right-j">
            <form action="" ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email Address ' />
                <button type='submit'>Join Now</button>
            </form>
        </div>
    </section>
  )
}

export default Join