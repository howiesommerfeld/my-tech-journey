import React from 'react';
import './Details.css'

function Details({detailsArray}) {
  return(
    <div>
      {detailsArray.map((paragraph)=>{
        return <p>{paragraph}</p>
      })}
    </div>
  )
    
  }

export default Details;