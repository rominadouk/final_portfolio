import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    window.location.reload()

    emailjs.sendForm('service_izmawsk', 'template_77ohm4f', form.current, 'DsB4B5WMHISyn_J3C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return (  
        <>
        <div className="contactForm">
            <div className='solid-line'></div>
            <div className="container mt-5 mb-5">
                <h2 className="mb-3">Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                        Name
                    </label>
                    <input className="contactField form-control" type="text" id="name" name="user_name" required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                        Email
                    </label>
                    <input className="contactField form-control" type="email" id="email"  name="user_email" required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                        Message
                    </label>
                    <textarea className="contactField form-control" id="message" name="message" required />
                    </div>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
        </>
    );
}
 
export default ContactForm;