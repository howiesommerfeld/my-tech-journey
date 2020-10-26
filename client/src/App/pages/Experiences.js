import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Learnings from '../Components/Experiences/Learnings';
import Projects from '../Components/Experiences/Projects';
import { capitalizeFirstLetter } from '../helpers/utilities';

function Experiences() {
  const [list, setList] = useState([])
  const [busy, setBusy] = useState(false)
  const [experience, setExperience] = useState(null)
  let {experienceId} = useParams();

  const getList = () => {
      setBusy(true)
      fetch('/api/getList')
      .then(res => res.json())
      .then(list => setList(list))
      .catch(e=>{console.log(e.message)})
      .finally(()=>setBusy(false));
  }

  const getExperience = () => {
      setBusy(true)
      fetch(`/api/experiences/${experienceId}`)
      .then(res => res.json())
      .then(experience => {setExperience(experience)})
      .catch(e=>{console.log(e.message)})
      .finally(()=>setBusy(false));
  }

  useEffect(()=>{
      if(typeof experienceId !== "undefined" && experienceId !== ""){
          getExperience();
      } else {
          getList();
      }
  },[experienceId])

  return (
    <div>
    {busy ?
    <div style={{textAlign:"center"}} className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div> :
    experience === null ? 
        <div>No Experiences Found</div>
        :
        <div style={{textAlign:"left"}}>
          <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
          <div class="col-md-8 px-0">
              <h1 class="display-4">{capitalizeFirstLetter(experienceId)}</h1>
              <h2 className="font-italic" >{experience.title}</h2>
              <p class="lead my-3">{experience["sub-title"]}</p>
              <p class="lead mb-0">{experience["timespan"]}</p>
            </div>
          </div>
          <p>
              {experience.details}
          </p>
          <div>
          {experience.learnings.length === 0 ? 
              <></>  :
              <>
                <h2 className="blog-post-title">Learnings</h2>
                <Learnings learningsArray={experience.learnings}/>
              </>
          }
          </div>
          <div>
          {experience.projects.length === 0 ? 
              <></>  : 
              <>
                  <h2 className="blog-post-title">Projects</h2>
                  <Projects projectsArray={experience.projects}/>
              </>
          }
          </div>
          <a href={experience.link} target="blank">{capitalizeFirstLetter(experienceId)} Website</a>
        </div>
    }
    </div>
  );
}

export default Experiences;