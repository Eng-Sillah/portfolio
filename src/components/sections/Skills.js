import React, { useEffect, useRef } from 'react';
import './Skills.css'; // Import the CSS file for the Skills section

function Skills() {
  const skillsSectionRef = useRef(null);

  useEffect(() => {
    const skillsSectionRef = document.getElementById('skills');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-level-bar');
            skillBars.forEach((bar) => {
              const width = bar.getAttribute('data-percent');
              bar.style.width = width;
              bar.style.animation = 'fillSkill 1s ease forwards';
            });
          } else {
            const skillBars = entry.target.querySelectorAll('.skill-level-bar');
            skillBars.forEach((bar) => {
              bar.style.width = '0';
              bar.style.animation = 'none';
            });
          }
        });
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      if (skillsSectionRef.current) {
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, [skillsSectionRef]);

  return (
    <section id="skills" className="skills-section" ref={skillsSectionRef}>
      <div className="content">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-content">
              <h3>Programming Languages</h3>
              <div className="sub-skill">
                <p>JavaScript </p>
                <div className="skill-level" >
                  <div className="skill-level-bar" data-percent="80%" id='javaScript' >
                    <div className="skill-percentage">80%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Python</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="70%">
                    <div className="skill-percentage">70%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Java</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="50%">
                    <div className="skill-percentage">50%</div>
                  </div>
                </div>
              </div>
              {/* Add more sub-skills */}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-content">
              <h3>Front-End Development</h3>
              <div className="sub-skill">
                <p>HTML</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="90%">
                    <div className="skill-percentage">90%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>CSS</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="80%">
                    <div className="skill-percentage">80%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>React</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="20%">
                    <div className="skill-percentage">20%</div>
                  </div>
                </div>
              </div>
              {/* Add more sub-skills */}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-content">
              <h3>Back-End Development</h3>
              <div className="sub-skill">
                <p>Node.js</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="70%">
                    <div className="skill-percentage">70%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Express.js</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="65%">
                    <div className="skill-percentage">65%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Python Flask</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="60%">
                    <div className="skill-percentage">60%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Python Flask</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="60%">
                    <div className="skill-percentage">60%</div>
                  </div>
                </div>
              </div>
              {/* Add more sub-skills */}
            </div>
          </div>
          <div className="skill-card">
            <div className="skill-content">
              <h3>Back-End Development</h3>
              <div className="sub-skill">
                <p>Node.js</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="70%">
                    <div className="skill-percentage">70%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Express.js</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="65%">
                    <div className="skill-percentage">65%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Python Flask</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="60%">
                    <div className="skill-percentage">60%</div>
                  </div>
                </div>
              </div>
              <div className="sub-skill">
                <p>Python Flask</p>
                <div className="skill-level">
                  <div className="skill-level-bar" data-percent="60%">
                    <div className="skill-percentage">60%</div>
                  </div>
                </div>
              </div>
              {/* Add more sub-skills */}
            </div>
          </div>
          {/* Add more skill-card components with sub-skills */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
