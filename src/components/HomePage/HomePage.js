import React from 'react';
import './HomePage.css'; // Import your CSS file
import performance from '../../assets/images/performace-measurement.jpeg'
import objectives from '../../assets/images/program-objectives.jpeg'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="program-overview">
          <h3>
            Our Masters Program is dedicated to providing students with an exceptional learning experience in the field of computer science. With a rigorous curriculum, accomplished faculty, and state-of-the-art resources, we prepare our students to excel in the dynamic world of technology.
          </h3>
      </div>

      <div className="objectives">
        <img src={objectives} alt="Program Objectives" />
        <div className="objectives-text">
          <h2>Program Objectives</h2>
          <ul>
            <li>Excellence in Education</li>
            <li>Cutting-edge Research</li>
            <li>Industry Relevance</li>
            <li>Holistic Development</li>
          </ul>
        </div>
      </div>

      <div className="assessment">
        <p>
          At our master's in computer science program, we recognize the vital role of performance measurement and assessment in optimizing the learning journey of our students.
        </p>
      </div>

      <div className="performance-measurement">
        <div className="performance-measurement-text">
          <h2>Performance Measurement and Assessment</h2>
          <ul>
            <li>Individual Progress Tracking</li>
            <li>Data-Driven Insights</li>
            <li>Continuous Improvement</li>
            <li>Encouraging Healthy Competition</li>
            <li>Preparation for Success</li>
          </ul>
        </div>
        <div className="performance-measurement-image">
          <img src={performance} alt="Performance Measurement" />
        </div>
      </div>

      <div className="contact-button">
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Homepage;