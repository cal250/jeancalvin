import React from 'react';
import './experience.css';
import ExperienceDetail from './ExperienceDetail';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>if you're curious, here are my</h5>
      <h2>My Experiences</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Proficiency</h3>
          <div className="experience__content">
            <ExperienceDetail title="Android SDK" content="Experienced"/>
            <ExperienceDetail title="Flutter" content="Intermediate"/>
            <ExperienceDetail title="EJS" content="Experienced"/>
            <ExperienceDetail title="React" content="Experienced"/>
           
     
          </div>
        </div>

        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <ExperienceDetail title="Typescript" content="Experienced"/>
            <ExperienceDetail title="Java" content="Bigginer"/>
            <ExperienceDetail title="Javascript" content="Experienced"/>
            <ExperienceDetail title="C/C++" content="Experienced"/>
            <ExperienceDetail title="Python" content="Experienced"/>
            <ExperienceDetail title="XML" content="Experienced"/>
            <ExperienceDetail title="CSS" content="Experienced"/>
            <ExperienceDetail title="SQL" content="Experienced"/>
           
            
           
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Proficiency</h3>
          <div className="experience__content">
            <ExperienceDetail title="SQLServer" content="Experienced"/>
            <ExperienceDetail title="noSQL" content="Intermediate"/>
            <ExperienceDetail title="Mongo" content="Experienced"/>
            <ExperienceDetail title="Firebase" content="Intermediate"/>
            <ExperienceDetail title="RESTFul " content="Experienced"/>
            <ExperienceDetail title="NodeJs" content="Experienced"/>
           
          </div>
        </div>
      </div>
    </section>
          
  );
};

export default Experience;
