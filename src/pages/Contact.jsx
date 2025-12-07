import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_aku1xkp', 'template_q264nn2', form.current, '0vbavm_I1IrfmzSgM')
      .then((result) => {
        alert('Message Sent Successfully');
      }, (error) => {
        alert('Failed to send message, try again');
      });
    e.target.reset();
  };

  return(
    <div className="Contacts-container">
      <div className="contact">
        <div className="contacts-detail">
          <h1>Contact Us</h1>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input className='contact-input' type="text" name="user_name" placeholder='Enter your name' required />
            <input className='contact-input' type="email" name="user_email" placeholder='Enter your email' required />
            <input className='contact-input' type="text" name="trek_name" placeholder='Enter the trek name' required />
            <button className='contact-btn' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
