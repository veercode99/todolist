import React from 'react'
import Navbar from '../Component/Navbar'
import './About.css';
import {useContext} from 'react'
import { ModeContext } from '../context/mode-context';


const AboutPage = () => {

  const {mode, togglefunction} = useContext(ModeContext) 

  return (
    <div>
        {/* <Navbar togglefunction={togglefunction} mode={mode} /> */}
      About - test
      
      <div className={`${mode === "light" ? "container" : "noncontainer"}`}>
      <h2>About ToDo</h2>
      <p>A to-do list is a list of items that need to be completed. The items on the list can 
      range from simple activities like replying to an email,
       to more complex tasks like creating project briefs.
      The items on a to-do list are usually action-oriented, 
      such as “Schedule a meet with the R&D team” or 
      “Call back customer X.” 
      Some lists include more abstract goals, such as “improve your time management skills” or
       “learn how to use a new software program.”
       </p></div>     
    </div>
  )
}

export default AboutPage
