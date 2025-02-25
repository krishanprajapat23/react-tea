import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
        {/* Hero Section */}
      <section id='hero' className="text-center my-5">
        <div className="container-lg container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <img src="https://img.freepik.com/free-psd/3d-nft-icon-developer-male-illustration_629802-6.jpg?ga=GA1.1.2112457093.1716619292&semt=ais_hybrid" alt="" className='img-fluid' width="300px"/>
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold">Hi, I'm Krish.</h1>
              <p className="lead">I'm a passionate Web Developer</p>
              <Link to="/" className="btn btn-warning btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <div className="container-lg container-fluid">
          <h2 className="text-center mb-4 fw-bold">Skills</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-4 text-center">
             
              <h4>Frontend Development</h4>
              <p>HTML, CSS, JavaScript, React, Bootstrap, Tailwind</p>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <h4>Backend Development</h4>
              <p>Node.js, Express, MongoDB, SQL</p>
            </div>
            <div className="col-md-6 col-lg-4 text-center">
              <h4>Tools & Version Control</h4>
              <p>Git, GitHub, Figma, Photoshop, Canva, VS Code</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;