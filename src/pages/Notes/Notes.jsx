import React from 'react';
import './Notes.css';

const Notes = () => {
  return (
    <div className="notes-container">
      <div className="notes-content">
        <div className="notes-header">
          <h1 className="notes-title">
            <span className="notes-icon">📝</span>
            My Notes & Thoughts
          </h1>
          {/* <p className="notes-subtitle">
            A collection of my technical insights, and random thoughts
          </p> */}
        </div>

        <div className="notes-grid">
          <div className="note-card cover-letter-card">
            <h3 className="note-title">Cover Letter</h3>
            <div className="cover-letter-content">
              <p className="greeting">Dear Visitor,</p>

              <p className="paragraph">
                I am a versatile and driven software engineer recently graduated from Master of Professional Engineering at the University of Western Australia, with a solid foundation from my Bachelor of Software Engineering at South China University of Technology.
              </p>
              
              <p className="paragraph">
                Through diverse academic and industry experiences across UX/UI design, full-stack development, data analysis and embedded systems, I have built:
              </p>
              
              <ul className="bullet-points">
                <li>a strong track record of rapidly mastering new tools and frameworks to deliver practical solutions.</li>
                <li>independently designed and developed commercial-grade web applications, embedded AI-assisted devices, and large-scale analytical tools, demonstrating my adaptability and passion for applying technology to real-world problems.</li>
                <li>My projects span AI-powered virtual trading systems, 3D spatial reconstruction applications, and assistive tools for the visually impaired, all of which reflect my curiosity and initiative to tackle complex challenges from different angles. Proficient in a wide range of programming languages including C++, Python, JavaScript and R,</li>
                <li>I am equally comfortable working with modern frameworks such as React, Vue, Next.js, Flask and Spring Boot, and deploying solutions via cloud platforms like AWS and Google Cloud.</li>
                <li>I thrive in collaborative, agile environments and have hands-on experience with CI/CD pipelines, version control, and cross-disciplinary teamwork. Eager to keep expanding my technical toolkit, I am proficient in web development skills and have extensive experience in client-based project development.</li>
              </ul>
              
              <p className="paragraph">
                I am also competent for different responsibilities in previous team development experience. I also keep up with the current AI era and can quickly and greatly improve the user experience of customers. I am always ready to learn, adapt and contribute fresh ideas to any team or project that values innovation and practical impact.
              </p>
              
              <div className="personal-note">
                <p className="personal-note-title">Personal Note:</p>
                <p className="personal-note-content">
                  If there is an opportunity and possibility, I am willing to first enter the position as an unpaid internship and then become a regular employee based on performance evaluation.
                </p>
              </div>
            </div>
            <div className="note-tags">
              <span className="tag">Cover Letter</span>
              <span className="tag">Job Application</span>
            </div>
          </div>
        </div>

        <div className="notes-footer">
          <p>More notes coming soon... 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Notes;