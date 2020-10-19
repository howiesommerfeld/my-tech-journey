import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <div className="App">
        <Jumbotron>
            <h1>👋 🌍 </h1>
            <p>
                My name is Howie Sommerfeld. I live in Johannesburg, South Africa and I love technology.
            </p>
            <p>
                I've recently been looking for new work opprtunities, but my CV was a bit outdated. <br/>
                Moreover, most of these opportunities require a portfolio of previous work.<br/>
                My professional portfolio is mostly proprietory, while a recent venture into the startup world has left me little time to dabble in the open source arena.
            </p>
            <p>
                So I decided to build a web app that could demonstrate my skills, while highlighting my experience over the years. <br/>
                My thinking is that this could double as a sample of my coding work &  an interactive CV. 
            </p>
            <p>Welcome to My Tech Journey</p>
            <p>
                <Button as={Link} to="/about" variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    </div>
  );
}

export default Home;
