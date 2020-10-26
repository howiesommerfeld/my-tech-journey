import React from 'react';
import { mapArrayIntoChunksOfLen } from '../../helpers/utilities';
import './Projects.css'

function Projects({projectsArray}) {

  const projectsChunks = mapArrayIntoChunksOfLen(projectsArray,2);
  return (
    projectsChunks.map((chunk, rowIndex)=>{
    return(
      <div className="row mb-2" key={rowIndex}>
        {chunk.map((project, colIndex) => {
          return(
            <div className="col md-6" key={`${rowIndex}-${colIndex}`}>
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">{project.title}</h4>
                  <h5 class="card-sub-title">{project.description}</h5>
                  <p class="card-text">{project.details}</p>
                  {typeof project.technologies === "undefined" ? <></> : 
                  <>
                  <h5>Technologies</h5>
                  <ul>
                    {project.technologies.map((tech, index)=>{
                      return <li key={index}>{tech}</li>
                    })}
                  </ul>
                  </>
                  }
                </div>
              </div>
            </div>)}
          )}
      </div>);
    })
  )
}

export default Projects;