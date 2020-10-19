import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";

function Experiences() {
    const [list, setList] = useState([])
    const [busy, setBusy] = useState(false)
    const [experience, setExperience] = useState({})
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
        .then(experience => setExperience(experience))
        .catch(e=>{console.log(e.message)})
        .finally(()=>setBusy(false));
    }

    useEffect(()=>{
        if(typeof experienceId !== "underfined" && experienceId !== ""){
            getExperience();
        } else {
            getList();
        }
    },[experienceId])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <div className="App">
        {experienceId === "" ? <h1>List of Experiences</h1> : <h1>List of Experiences at {capitalizeFirstLetter(experienceId)}</h1>}
        {busy ?
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div> :
        experience === {} ? <div>No Experiences Found</div>:<h1>{experience.title}</h1>
        }
        </div>
    );
}

export default Experiences;