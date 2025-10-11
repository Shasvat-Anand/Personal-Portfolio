import React from 'react'
import Backend from './Backend'
import Frontend from './Frontend'
import './Skill.css'

const Skill = () => {
  return (
     <section className="skill section" id="skills">
         <h2 className="section__title">Skills</h2>
        <span className="section__subtitle" >Matter of fact</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>

        </div>


     </section>
  )
}

export default Skill