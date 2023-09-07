import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

const slides = [
  {
    intro: 'My name is',
    title: 'Sorie Bonkay Sillah',
    subtitle: 'Highly motivated web designer with a vast experience of designing corporate website and new web interfaces. Processing complete technical knowledge of HTML, CSS, JavaScript, and React coding.',
    buttonLabel: 'Contact me',
    sectionId: 'contact', // ID of the contact section
  },
  {
    intro: 'I am a Full-stack',
    title: 'Web Developer',
    subtitle: 'My main areas of expertise include Javascript, Typescript, Node.js, HTML, CSS, php and Python.',
    buttonLabel: 'See my work',
    sectionId: 'projects', // ID of the projects section
  },
  // Add more slides here as needed
];

function Home() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const homeRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7, // Adjust as needed
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInUp');
          entry.target.querySelector('.main-title').classList.add('color-changing');
          setIsLoading(true);
        } else {
          entry.target.classList.remove('fadeInUp');
          entry.target.querySelector('.main-title').classList.remove('color-changing');
          setIsLoading(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const currentRef = homeRef.current;
    if (homeRef.current) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [homeRef]);

  useEffect(() => {
    if (isLoading) {
      const timeout = setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 2000); // Wait for 2 seconds (same as the loading animation duration)

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentSlide = slides[currentSlideIndex];

  const handleButtonClick = () => {
    const targetSection = document.getElementById(currentSlide.sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <section
      id="home"
      className="home-section"
      ref={homeRef}
    >
      <div className="bg-overlay">
        <div className="content">
          <div className="centered-div">
            <div className="left-column">
              <img
                src="https://lh3.googleusercontent.com/a/AAcHTtdwUCT1tjAuowBwZGAJsHhf7wGRXjUel9dkoqpdV9JaDg=s96-c-rg-br100"
                alt="Developer"
                className="profile-image"
              />
            </div>
            <div className="right-column">
              <div className='intro-title'>
                <h3 className='intro'>{currentSlide.intro}</h3>
                <h1 className="main-title">
                  {currentSlide.title}
                </h1>
              </div>
              <h3 className="subtitle">
                {currentSlide.subtitle}
              </h3>
              <button className="description" onClick={handleButtonClick}>
                {currentSlide.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
