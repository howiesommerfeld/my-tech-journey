import React from 'react';
import { mapArrayIntoChunksOfLen } from '../../helpers/utilities';
import './Learnings.css'

function Learnings({learningsArray}) {
  const learningsChunks = mapArrayIntoChunksOfLen(learningsArray,3);
  return (
    learningsChunks.map((chunk, rowIndex)=>{
    return(
      <div className="row mb-2" key={rowIndex}>
        {chunk.map((learning, colIndex) => {
          return(
            <div className="col md-4" key={`${rowIndex}-${colIndex}`}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{learning.title}</h5>
                  <p class="card-text">{learning.details}</p>
                </div>
              </div>
            </div>)}
          )}
      </div>);
    })
  )
}

export default Learnings;