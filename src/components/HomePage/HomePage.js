import React from 'react';
import './HomePage.css'; // Import your CSS file
import performance from '../../assets/images/performace-measurement.jpeg'
import objectives from '../../assets/images/program-objectives.jpeg'
import Square from '../../components/common/Square/Square'

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="program-overview">
        <div className='program-overview-heading'>
          <Square className='program-overview-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
          <h1>Program Objective</h1>
        </div>
        <p>UTA’s Master of Science degree in Data Science helps meet the growing need for application-oriented engineers who can use data science tools and techniques to solve complex problems in industries such as manufacturing, logistics, healthcare and energy.
          <br/><br/>The program is unique for its breadth, offering a widely encompassing set of courses that allows students with or without a programming background to develop the necessary data science skills. It aims to instill the acumen needed to draw insights from data, to make sound decisions using data, and to effectively communicate about data driven findings and decisions.
          <br/><br/>Students will use real-world problems, methods and data in instruction materials through collaboration with community partners; problem-based, experiential learning which emphasizes hands-on coding exercises; service learning in which students learn while doing for social good; and inclusive learning to broaden student participation and strengthen student retention in data science education.
          <br/><br/>The degree requires 30 course hours and can be completed in two years. After completion of a set of core courses, students may choose electives from multiple programs to match their career interests. They may also participate in a capstone experience which can be integrated with workplace projects. Elective options offer additional flexibility to craft a degree that fits his or her specific situation.
          <br/><br/>Students will come from different backgrounds, but the most important factor for their growth and success will be a keen interest in learning the powerful ways in which data can be applied in various fields.
        </p>
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
        <div className='objectives-rect'></div>
      </div>

      <div className="assessment">
        <div className='assessment-heading'>
          <Square className='assessment-heading_square' height={18} width={18} color={{ r: 133, g: 29, b: 252 }} />
          <h1>Performance Assessment</h1>
        </div>
        <p>
          At our master's in computer science program, we recognize the vital role of performance measurement and assessment in optimizing the learning journey of our students.
        </p>
      </div>

      <div className="performance-measurement">
        <div className='performance-measurement-rect'></div>
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