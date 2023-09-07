import React from 'react';
import './About.css'; // Import the CSS file for the About section

function About() {
  return (
    <section id="about" className="about-section">
      <div className="content" id='aboutContent'>
        <h2 id='about'>About Me</h2>
        <div className="about-grid">
          <div className="experience">
            <h3>Experience</h3>
            <div className="experience-item">
              <h4 className='experience-title'>Sierra Coding academy</h4>
              <p className='experience-place'>Freetown, Sierra Leone </p>
              <p className='experience-time'>June 2021 - Continue </p>
              <p className='experience-position'>Co-Founder of Sierra Coding Academy </p>
              <p className='experience-description'>Sierra Coding Academy is an innovative online coding learning platform base in sierra leone. Contributed to the conceptualization, development, and launch of the platform. Collaborated with the team to design curriculum, create engaging learning materials, and establish a user-friendly online experience. Played a pivotal role in shaping the company's vision and mission to empower individuals with essential coding skills.</p>
            </div>

            <div className="experience-item">
              <h4 className='experience-title'>BaTach Priority One Company Ltd</h4>
              <p className='experience-place'>Freetown, Sierra Leone </p>
              <p className='experience-time'>June 2021 - May 2023 </p>
              <p className='experience-position'>Senior IT Manager </p>
              <p className='experience-description'>Led IT operations for a financial institution, overseeing strategic technology planning, infrastructure management, and regulatory compliance. Managed cross-functional teams, executed critical projects, and ensured secure, efficient, and innovative IT solutions to drive operational excellence and enhance customer experiences.</p>
            </div>
            
            <div className="experience-item">
              <h4 className='experience-title'>B.BLACK ENTERPRISE</h4>
              <p className='experience-place'>Freetown, Sierra Leone</p>
              <p className='experience-time'>June 2021 - May 2023 </p>
              <p className='experience-position'>Sales Manager </p>
              <p className='experience-description'>Full stack web and mobile development on Klarna's main shopping app infrastructure using React, React Native, and Node.js.</p>
            </div>
            {/* Add more experience items */}
          </div>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>BSc. Hons Degree in Software Engineering with Multimedia</h4>
              <p>Limkokwing University of Creative Technology Sierra Leone</p>
              <p>April, 2019 - Current</p>
              <p>Studies included understanding the fundamental principles of programming logic, software engineering concepts, data structures, multimedia integration, user-centered design, collaborative project work, quality assurance techniques, and creative problem-solving. This holistic learning experience equipped me with a versatile skill set to develop user-friendly, innovative software solutions that seamlessly merge technology and multimedia elements for enhanced user experiences.</p>
            </div>
            <div className="education-item">
              <h4>West Africa Senior School Certificate Examination (WASSCE)</h4>
              <p>Grace School of Science</p>
              <p>September, 2010 - May, 2013</p>
              <p>Studies included fundamental computer science subjects such as software & hardware architecture and development. Also an emphasis on automation techniques.</p>
            </div>
            {/* Add more education items */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
