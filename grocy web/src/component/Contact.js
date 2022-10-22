import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wa4jyhq', 'template_xhz8sy6', form.current, 'JQoc8eQ8hmfAWygd3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
      <section className="contact">
                        <h1 className="heading"><span>Contact</span>Us</h1>
                         <div className="form_content">
                        <div className="form">
                               <form ref={form} onSubmit={sendEmail}>
                           <input type="text" placeholder='Name:' required/>
                           <input type="text" placeholder='Email:' required/>
                           <input type="text" placeholder='Mobile No:' required/>
                           <input type="text" placeholder='Subject' required/>
                           <textarea name="message" id="message" cols="30" rows="10" placeholder='Message'></textarea>
                            <button className='btn' type='submit'>Send Message</button>
                                        
                         
                           
                                </form>
                        </div>
                        </div>
      </section>
                    )
}

export default Contact