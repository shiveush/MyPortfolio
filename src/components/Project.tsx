import React from "react";
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
    <a href="https://github.com/shiveush/hostel-complaint-tracker" target="_blank" rel="noreferrer">
        <img src={proj} className="zoom" alt="Hostel Complaint Tracker" width="100%"/>
    </a>
    <a href="https://github.com/shiveush/hostel-complaint-tracker" target="_blank" rel="noreferrer">
        <h2>Hostel Complaint Tracker</h2>
    </a>
    <p>
        A console-based complaint management system built with Core Java and JDBC, featuring secure 
        student authentication and role-based workflows for raising, tracking, and resolving complaints.
    </p>
</div>

        </div>
    </div>
    );
}

export default Project;
