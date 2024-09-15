import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react'; 
import '../src/styles/index.css';
import { About, Contact, Hero, Navbar, StarsCanvas } from "./components";
import HallofFame from "./components/Experience";
import Announcement from "./components/Feedbacks";
import Footer from "./components/footer";
import Contact2 from "./components/contact2";

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const closePopup = () => {
    setIsPopupVisible(false);
  };
  return (
    <div className="App">
      {isPopupVisible && (
        <>
          <div className="hidescreen"  onClick={closePopup}/>
          <div className="window" id="info-window">
            <div className="window-header">
              <span>Info</span>
              <button className="close-btn" onClick={closePopup}>X</button>
            </div>
            <div className="window-body">
              <p>We're hosting an event.</p><br/>
              <a href="https://partiful.com/e/aI0JemmmmFTqX4U6HD90" style={{border: '1px solid white', padding: '2px', paddingTop: '5px', paddingBottom: '5px', color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">Learn more // Join</a><br/><br/>
              <p>Mark your calendars for an exhilarating journey into the world of FinTech cybersecurity at EtherX, happening from September 27 to September 29, 2024! Hosted by The Eye, this intra-college event is exclusively open to all departments and years of PSG College of Technology. Whether you're a seasoned tech enthusiast or just starting out, EtherX promises to be an enriching experience for everyone.<br/><br/>
              <p style={{textAlign:'left'}}>Registration:<br/>
              ● Teams of 4 people<br/>
              ● Register as a group or individually (we'll form teams for individuals)<br/><br/>
              Event Schedule:<br/><br/>
              Day 1 (Friday):<br/>
              ● Kickoff Workshop: Led by a guest speaker, expert in FinTech cybersecurity<br/>
              ● Sets the stage for the weekend<br/><br/>
              Day 2 (Saturday):<br/><br/>
              Workshops Start (10:00 AM):<br/>
              ● Capture The Flag (CTF) Competitions<br/>
              ● Open Source Intelligence (OSINT)<br/>
              ● Finance Security Fundamentals<br/><br/>
              Hands-On Session (11:00 AM - 12:00 PM):<br/>
              ● Secure coding techniques<br/>
              ● GitHub & GitGuardian<br/><br/>
              ● Primary Hackathon: Case Study & OSINT Hacking Challenge (1:45 PM - 5:00 PM)<br/><br/>
              Day 3 (Sunday):<br/><br/>
              Speed Run Hackathon (9:00 AM):<br/>
              ● Full internet access (except copying readymade code from GitHub)<br/>
              ● Use tools like ChatGPT<br/>
              ● Showcase problem-solving and creativity<br/><br/>
              Valedictory Function & Prize Distribution (2:00 PM - 2:30 PM):<br/>
              ● Participation certificates<br/>
              ● Top prizes awarded<br/><br/>
              Closing Note:<br/>
              ● Enhance your cybersecurity skills<br/>
              ● Network with like-minded peers<br/>
              ● Compete in a thrilling environment<br/><br/>
              Venue: PSG College of Technology</p></p>
            </div>
          </div>
        </>
      )}
    <BrowserRouter>
      <div className="relative z-0 bg-primary overflow-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col">
          <Navbar />
          <Hero />
        </div>
        <div className="flex flex-col mt-56">
          {/*<Announcement />
          <HallofFame />*/}
          <About />
        </div>

        <div className="relative z-0 ">
          <div className="flex flex-col  md:flex-row">
            <Contact />
            <Contact2 />
          </div>
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;
