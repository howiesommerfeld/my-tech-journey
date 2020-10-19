import React, { useState, useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

function About() {
    const [list, setList] = useState([])

    const getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => setList(list));
    }

    useEffect(()=>{
        getList();
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
        {/* Check to see if any items are found*/}
        {list.length ? (
            <div>
            {/* Render the list of items */}
            {list.map((item) => {
                return(
                <div>
                    {item}
                </div>
                );
            })}
            </div>
        ) : (
            <div>
            <h2>No Skills Found</h2>
            </div>
        )
        }
        </div>
    );
}

export default About;