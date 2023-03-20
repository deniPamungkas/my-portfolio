import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <main className="contact" id="contact">
    <section className="name">
      <h6>Get In Touch</h6>
      <h2>Contact Me</h2>
    </section>
    <br />
    <section className="meta-cont">
     <div className='content1'></div>
     <div className='content2'>
      <form className='form-contact' action="submit">
          <input className='input-name' placeholder='Your Full Name' type="text" />
          <input className='input-name' placeholder='Your Email' type="email" />
          <textarea className='message' placeholder='Your Message' name="" id=""></textarea>
          <input className='btn-submit' value={'Send Message'} type="submit" />
      </form>
     </div>
    </section>
  </main>
  )
}

export default Contact