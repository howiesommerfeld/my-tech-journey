import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../helpers/utilities';

function About() {
    const [busy, setBusy] = useState(false)
    const [skills, setSkills] = useState([])

    useEffect(()=>{
        async function getSkills () {
            setBusy(true)
            await fetch(`/api/skills`)
            .then(res => res.json())
            .then(skills => {setSkills(skills)})
            .catch(e=>{console.log(e.message)})
            .finally(setBusy(false))
        }
        getSkills();
    },[])

    return (
    <div className="App">
    <Jumbotron>
        <h1>About Me</h1>
        <p>
            A generalist looking to thrive in a specialized world. <br/>
        </p>
        <p>
            I enjoy reading, learning, problem solving & living life.<br/>
            Family is very important to me. <br/>
        </p>
        <p>
            I appreciate attention to detail, exceptional quality and high standards.
        </p>
        <br/>
        <p>Below is a list of some of the techinical skills I've picked up over the years.</p>
        <p>You can also take a closer look at some of the formal education I've had by clicking the button below</p>
        <p>
            <Button as={Link} to="/experiences/university"variant="primary">View Education Details</Button>
        </p>
    </Jumbotron>
    { busy ? 
    <div style={{backgroundColor:"red"}} className="spinner-border" role="status">
        {console.log("BUSY")}
        <span className="sr-only">Loading...</span>
    </div> 
    : 
    <div className="container">
        <div className="row">
            {skills.map((skill) => {
                return Object.entries(skill).map(([key, value]) => {
                    return (
                        <div className="col-sm" key={key}>
                            <h2>{capitalizeFirstLetter(key)}</h2>
                            <ul style={{listStyle:"none",padding:0}}> 
                                {value.map(val=>{
                                return (
                                    <li key={val}>{val}</li>
                                )
                                })} 
                            </ul>
                        </div>
                    )}
                );
            })}
        </div>
    </div>
    }
    </div>
    );
}

export default About;