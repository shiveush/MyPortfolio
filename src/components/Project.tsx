import React from "react";
import projf from '../assets/images/projf.png';
import proj from '../assets/images/proj.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
    <a href="https://github.com/shiveush/expense-tracker-java" target="_blank" rel="noreferrer">
        <img src={proj} className="zoom" alt="Expense Tracker" width="100%"/>
    </a>
    <a href="https://github.com/shiveush/expense-tracker-java" target="_blank" rel="noreferrer">
        <h2>Expense Tracker</h2>
    </a>
    <p>
        A console-based expense tracking application built using Java and object-oriented principles, 
        supporting expense management with persistent storage using file handling.
    </p>
</div>

<div className="project">
    <a href="https://www.figma.com/design/zfSLiafoI8sUwwj6E9Dfd6/LifeOn?node-id=0-1&t=v0PAp7ntQ3YpVDbf-1" target="_blank" rel="noreferrer">
        <img src={projf} className="zoom" alt="LifeOn UI" width="100%"/>
    </a>
    <a href="https://www.figma.com/design/zfSLiafoI8sUwwj6E9Dfd6/LifeOn?node-id=0-1&t=v0PAp7ntQ3YpVDbf-1" target="_blank" rel="noreferrer">
        <h2>LifeOn – Autopay Manager UI</h2>
    </a>
    <p>
        Designed a mobile application interface to manage autopay bills, focusing on user flow, 
        usability, and high-fidelity prototyping using Figma.
    </p>
</div>

        </div>
    </div>
    );
}

export default Project;