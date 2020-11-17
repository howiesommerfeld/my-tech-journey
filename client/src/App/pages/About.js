import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../helpers/utilities';
import { seo } from '../helpers/utilities';

function About() {
  const [busy, setBusy] = useState(false)
  const [skills, setSkills] = useState([])

  useEffect(()=>{
      seo({
        title:"About | Some Personal Details About What Makes Me Tick",
        metaDescription:"It's important to remember that we are all human beings. We have interests, hobbies, social lives and ideologies outside of our professional lives. Take a look at some of the things which shape the person that I am "
      })
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
  <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
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
      <p>Take a closer look at some of the formal education I've had by clicking the button below</p>
      <Link to="/experiences/university">
        <button className="btn btn-sm btn-outline-light">My Education</button>
      </Link>
  </div>
  { busy ? 
  <div style={{backgroundColor:"red"}} className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
  </div> 
  : 
  <div className="container">
    <h2 className="blog-post-title">Techincal Skills</h2>
    <div className="row">
      {skills.map((skill) => {
        return Object.entries(skill).map(([key, value]) => {
          return (
            <div className="col-sm" key={key}>
              <div class="card">
                <h5>{capitalizeFirstLetter(key)}</h5>
                <ul style={{listStyle:"none",padding:0}}> 
                    {value.map(val=>{
                    return (
                        <li key={val}>{val}</li>
                    )
                    })} 
                </ul>
              </div>
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