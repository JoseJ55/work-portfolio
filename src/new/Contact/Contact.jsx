import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

function Contact() {
    // const [animate, setAnimate] = useState(false);

    const formRef = useRef();

    const handleSubmit = (e) => {
      console.log(formRef)

      e.preventDefault();
      emailjs
        .sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, formRef.current, process.env.REACT_APP_EMAIL_USER_ID)
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // const observer = useMemo(() => new IntersectionObserver(
    //   ([entry]) => {
    //     setAnimate(entry.isIntersecting);
    //   }
    // ), []);

    // useEffect(() => {
    //   observer.observe(formRef.current)
    //   return () => observer.disconnect()
    // }, [observer])

  return (
    <div id='contact'>
      <div id='contact-image'>

      </div>

      <form id='contact-form' ref={formRef} onSubmit={handleSubmit}>
        <label id='contact-form-title'>Let's Craft <span>Brilliance</span> Together</label>

        <input className='contact-input' name='name' type='text' placeholder='Name' />
        <input className='contact-input' name='email' type='email' placeholder='Email*' />
        <input className='contact-input' name='message' type='text' placeholder='Message*' />

        <input id='contact-button' type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Contact;