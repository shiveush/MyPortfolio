import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faPenRuler } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
  "Java",
  "OOP",
  "Collections",
  "File Handling",
  "CLI Apps",
];

const labelsSecond = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git"
];

const labelsThird = [
  "Figma",
  "Wireframing",
  "Prototyping",
  "User Flow",
  "UI Design",
  "UX Thinking"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Software Development</h3>
                    <p>I build practical software applications using Java and object-oriented principles,
                        focusing on clean structure, modular design, and problem-solving.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faLaptopCode} size="3x"/>
                    <h3>Web Development</h3>
                    <p>I develop frontend applications using React, HTML, and CSS, with a focus on
    responsive design and clean user interfaces.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPenRuler} size="3x"/>
                    <h3>UI/UX Design</h3>
                    <p>I design application interfaces and user flows using Figma, focusing on usability,
    clarity, and intuitive user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;