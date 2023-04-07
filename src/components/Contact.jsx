import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
import './Contact.css'


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
        <div id="contactForm">
            <div className='solid-line'></div>
            <Container className='my-5'>
                <Row>
                    <Col className="offset-sm-2 col-sm-8 offset-md-3 col-md-6">
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default ContactForm;