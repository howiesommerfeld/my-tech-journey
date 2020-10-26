import React from 'react';
import './Project.css'

function Project({projectData}) {

    return (
        <div className="project">
          {projectData}
        </div>
    );
}

export default Project;