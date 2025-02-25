import React from 'react'

function Contact() {

    
  return (
    <section id="contact" className="py-5">
        <div className="container-lg container-fluid">
        <div className="col-lg-6 mx-auto">
          <h2 className="text-center mb-4 fw-bold">Contact Me</h2>
          <form onSubmit={(e) => {e.preventDefault(); console.log('Form submitted successfully.')}}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-theme">Send Message</button>
          </form>
        </div>
        </div>
      </section>
  )
}

export default Contact
