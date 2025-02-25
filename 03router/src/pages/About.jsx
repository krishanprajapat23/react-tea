// src/About.jsx

import {Link} from 'react-router-dom';

function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <p>
              Hello! I'm Krish, a passionate and dedicated web developer
              with over 3 years of experience in building dynamic and responsive
              websites and web applications. I specialize in frontend and
              backend development, ensuring a seamless user experience and
              robust functionality.
            </p>
            <p>
              I have hands-on experience with modern JavaScript frameworks like
              React, as well as backend technologies such as Node.js and
              Express. I'm constantly learning and exploring new tools to stay
              up-to-date with the ever-evolving world of web development.
            </p>
            <p>
              I believe in clean, maintainable code and the importance of
              collaborating with other developers and designers to create
              efficient, scalable solutions. I'm passionate about making the web
              a better place through thoughtful and user-centric design and
              development.
            </p>
            <p>
              In my free time, I enjoy contributing to open-source projects,
              learning new technologies, and staying active in the web
              development community. I’m always open to new opportunities and
              collaborations, so feel free to reach out to me!
            </p>
            <Link
              to="/contact"
              className="btn btn-theme btn-lg mt-3"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
