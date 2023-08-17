import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id='contact'>
        <div id='contact-image'>

        </div>

        <div id='contact-form'>
            <input className='contact-input' type='text' placeholder='Name' />
            <input className='contact-input' type='text' placeholder='Email' />
            <input className='contact-input' type='text' placeholder='Message' />
        </div>
    </div>
  )
}

export default Contact;