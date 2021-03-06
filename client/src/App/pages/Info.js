import React, { useEffect } from 'react';
import { seo } from '../helpers/utilities';
import {Link} from "react-router-dom"

function Info() {

  useEffect(()=>{
    seo({
      title:"Info | Links to Curriculum Vitae & Tech Profiles ",
      metaDescription:"It's been a challenge to encapsulate a decade long journey of working in the tech industry into a few web pages. So I've included a few external sources to more technical and verbose information on this page"
    })
  },[])

  return (
    <div className="App">
      <div style={{textAlign:"left", padding:15}}>
        <h4>Curriculum Vitae</h4>
        <p>I've published the most up to date version of my CV here:</p>
      <a class="btn btn-lg btn-outline-secondary" href="https://docs.google.com/document/d/e/2PACX-1vR5AJh2xpUYiplruCZOCNPOwnPv039BOgt-snqSWrwD--YrF41hvS4GGJqh4l92tDYeFn1nAr2js_Tn/pub" target="blank">View CV</a>
      </div>
      <div style={{textAlign:"left", padding:15}}>
        <h4>LinkedIn</h4>
        <p>A collection of my professional experiences</p>
      <a class="btn btn-lg btn-outline-secondary" href="https://www.linkedin.com/in/howard-sommerfeld-348360114/" target="blank">View LinkedIn Profile</a>
      </div>
      <div style={{textAlign:"left", padding:15}}>
        <h4>Github</h4>
        <p>I’m working on making this profile contain more public projects</p>
      <a class="btn btn-lg btn-outline-secondary" href="https://github.com/howiesommerfeld/" target="blank">View Github Profile</a>
      </div>
      <div style={{textAlign:"left", padding:15}}>
        <h4>Codecademy</h4>
        <p>I recently completed a couple PRO courses on front end (React) and back end (Node & Express) web development</p>
      <a class="btn btn-lg btn-outline-secondary" href="https://www.codecademy.com/profiles/tagPro44935" target="blank">View Codecademy Profile</a>
      </div>
      <div style={{textAlign:"left", padding:15}}>
        <h4>Y Combinator Startup School</h4>
        <p>In 2019 we completed the startup school curriculum. As part of this, we later applied to Y Combinator's W2019 batch and made it through to the round of partner interviews.</p>
      <a class="btn btn-lg btn-outline-secondary" href="https://www.startupschool.org/" target="blank">More About Startup School</a>
      </div>
      <div style={{textAlign:"left", padding:15}}>
        <h4>Get In Touch</h4>
        <p>Use the button below to send me a message</p>
        <Link to="/contact">
          <button className="btn btn-lg btn-outline-secondary">Contact Me</button>
        </Link>
      </div>
      
    </div>
  );
}

export default Info;