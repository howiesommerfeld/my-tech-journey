import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Learning from '../Components/Experiences/Learning';
import Project from '../Components/Experiences/Project';
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
        <div className="App">
        {experienceId === "" ? <h1>Experiences</h1> : <h1>Experiences at {capitalizeFirstLetter(experienceId)}</h1>}
        {busy ?
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div> :
        experience === null ? 
            <div>No Experiences Found</div>
            :
            <div>
                <h1>{experience.title}</h1>
                <h3>{experience["sub-title"]}</h3>
                <h4>{experience["timespan"]}</h4>
                <div>
                    <p>
                        {experience.details}
                    </p>
                </div>
                
                <div>
                    
                    {experience.learnings.length === 0 ? 
                        <></>  :
                        <>
                            Key learnings<br/>
                            {experience.learnings.map((item,index)=> <Learning learningData={item} key={index}/>)}
                        </>
                    }
                </div>
                <div>
                    
                    {experience.projects.length === 0 ? 
                        <></>  : 
                        <>
                            Projects<br/>
                            {experience.projects.map((item,index)=> <Project projectData={item} key={index}/>)}
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