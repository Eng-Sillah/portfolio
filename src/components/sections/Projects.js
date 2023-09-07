import React, { useState } from 'react';
// import './Projects.css'; // Import the CSS file for the Projects section
import bankistImage from '../../images/Bankist.png';
import pigGameImage from '../../images/pigGame.png';
import guessNumberImage from '../../images/guessNumber.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal';
import './Projects.css';

function Projects() {
  const projectsData = [
    {
      id: 'bankist',
      title: 'Bankist App',
      subtitle: 'Product showcase website',
      backgroundImage: bankistImage,
      tags: 'web development',
      alt: 'Bankist Image',
      description: "Bankist App created during Jonas Schmedtmann's course This is the simple banking app, which was created within the scope of Jonas Schmedtmann's JS course. The project was implemented during the arrays section and arrays' methods, especially **callback** funtctions within them.\n HTML and CSS code **isn't mine** - it was already provided by Jonas. JS boilerplate (grabbing all elements in DOM and creating object with users) also was provided initially.Since line 65 of _script.js_ file the code is mostly mine, but checked with videos. Nevertheless, I don't code along with Jonas - since he explains the logic in current task, I pause the video and code by myself. Sometimes I implement improvements after seeing video with Jonas' code, sometimes I leave my own code.\n## How to use app Firstly, you need to log in.\n There's no backend, the logging function is simply made by changing opacity of the _app_ element.There are four users:\n Account 1 login: js, Account 1 password: 1111  \nAccount 2 login: jd Account 2 passowrd = 2222  \nAccount 3 login = stw Account 3 password = 3333  \nAccount 4 login = ss  Account 4 password = 4444   \nAfter succesfull logging in, you're able to make withdrawal, deposits and send money to another **existing** user. \nIf you change the account to another user, the pervious transfer will be displayed.",
      demoLink: 'https://example.com/bankist-demo',
      githubLink: 'https://github.com/yourusername/bankist',
      // Add more project details
    },
    {
      id: 'pig-game',
      title: 'Pig Game',
      subtitle: 'E-commerce website',
      backgroundImage: pigGameImage,
      tags: 'web development | web design',
      alt: 'Pig Game Image',
      description: `In this game, User Interface (UI) contains user/player that can do three things, they are as follows:\nThere will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.\nRoll the dice: The current player has to roll the dice and then a random number will be generated. If the current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.\nNote: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.\nHold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.\nReset: All the scores are set to 0 and Player 1 is set as the starting player (current player).`,
      demoLink: 'https://example.com/pig-game-demo',
      githubLink: 'https://github.com/yourusername/pig-game',
// Add more project details

    },
    {
      id: 'guess-number',
      title: 'Guess My Number',
      subtitle: 'Number guessing game',
      backgroundImage: guessNumberImage,
      tags: 'web development | web design',
      alt: 'Guess Image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      demoLink: 'https://app.netlify.com/sites/guess-my-number-by-sillah/configuration/domain',
      githubLink: 'https://github.com/yourusername/pig-game',
      // Add more project details
    },
    {
      id: 'guess-number',
      title: 'Guess My Number',
      subtitle: 'Number guessing game',
      backgroundImage: guessNumberImage,
      tags: 'web development | web design',
      alt: 'Guess Image',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      demoLink: 'https://example.com/pig-game-demo',
      githubLink: 'https://github.com/yourusername/pig-game',
      // Add more project details
    },
    // Add more project objects
  ];

  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);


  const getData = (backgroundImage, title, tag, description) => {
    let tempData = [backgroundImage, title, tag, description]
    setTempdata(project => [1, ...tempData])

    return setModal(true);
  }

  return (
    <div className="content projects py-4 py-lg-5 container">
      <h1>Projects</h1>
      <div className='row justify-content-center align-item-center'>

        {projectsData.map((project, index) => {
          return (
                  <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4' key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={project.backgroundImage} className="card-img-top" alt={project.alt} />
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.subtitle}</p>
                      <button className='btn btn-primary' onClick={() => getData(project.backgroundImage, project.title, project.description)}>View Project</button>
                    </div>
                  </div>
                </div>
                )
        })}


      </div>

      {/* <div className="titleWrapper">
        <div className="line-1 active">
          <h3 className="anim-typewriter">projects<span className="blue">.</span></h3>
          <div className="blue_line"></div>
        </div>
      </div>
      <div className="web-development visible">
        <h4>Web design &amp; Development<span className="blue">.</span></h4>
        <div className="blue_line smaller"></div>
      </div>

      <div className="items">
        {projectsData.map((project) => (
          <div
            className="project_box visible"
            key={project.id}
            onClick={() => {
              setSelectedProject(project);
              setIsModalOpen(true);
            }}
          >
            <Link to={`/project/${project.id}`}>
              <div className="img_wrap" style={{ backgroundImage: `url(${project.backgroundImage})` }}></div>
              <div className="desc_box" id={`project_${project.id}`} style={{ display: 'initial' }}>
                <div className="title">
                  {project.title}<span className="blue">.</span>
                </div>
                <div className="subtitle">{project.subtitle}</div>
                <div className="tags">web development | web design</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Render the ProjectModal if isModalOpen is true */}
      {/* {isModalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setIsModalOpen(false)}
          active={isModalOpen}
        />
      )} */}

      {/* <Routes>
        {projectsData.map((project) => (
          <Route
            key={`project-detail-${project.id}`}
            path={`/project/${project.id}/*`}
            element={<ProjectDetail project={project} />}
          />
        ))}
      // </Routes> */} 

      {
        modal === true ? <Modal title={tempdata[2]} backgroundImage={tempdata[1]} tag={tempdata[2]} description={tempdata[3]} hide={()=> {setModal(false)}}/> : ''
      }
      
    </div>

  
  );
}

export default Projects;
