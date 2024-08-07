import React from 'react'
import './contact.css'
import {BiMailSend, BiLogoWhatsapp} from 'react-icons/bi'
import ContactOption from './ContactOption'

import emailjs from 'emailjs-com';
import { useRef } from 'react'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_prqr4kp", "template_b1v1saw", form.current, "Qc3XsFe840eYq35X3")
      .then((result) => {
        window.alert("Message Sent! Thank you for reaching out; I will respond as soon as possible.")
        e.target.reset()
          
      }, (error) => {
          console.log(error.text);
      });
  };

  const mailtoRef = useRef('mailto:jeancalvin027@gmail.com');
  const whatsappRef = useRef('');

  return (
    <section id='contact'>
      <h5>If you want to talk to me, here are some</h5>
      <h2>Contacts</h2>

      <div className="container contact__container">

        <div className="contact__options">

          <ContactOption icon={<BiMailSend className='contact__option-icon'/>} title="Email" content="jeancalvin027@gmail.com" link={mailtoRef}/>
          <ContactOption icon={<BiLogoWhatsapp className='contact__option-icon'/>} title="WhatsApp" content="+250 781 637 754" link={whatsappRef}/>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <h4>Send a direct message</h4>
          <input type="text" name='name' placeholder='What should I call you' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message content' required></textarea>
          
          <button type='submit' className='btn btn-primary'>
            Send direct message
          </button>
        </form>

      </div>
    </section>

  )
}

export default Contact