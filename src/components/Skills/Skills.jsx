import React from 'react';
import "./Skills.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";
import 'react-multi-carousel/lib/styles.css';

function Skills() {
  const items = [
    <AiFillHtml5 id="html" className='icon-size'/>,
    <FaCss3Alt id="css" className='icon-size'/>,
    <DiJavascript1 id="js" className='icon-size'/>,
    <FaNodeJs id="node" className='icon-size'/>,
    <FaReact id="react" className='icon-size'/>,
    <DiMysql id="mysql" className='icon-size'/>,
    <DiMongodb id="mongo" className='icon-size'/>
  ]

  return (
    <div id="portfolio_skills">
      {items.map((item, index) => (
        <div key={index} className="portfolio_skills-area_icon">
          {item}
        </div>
      ))}
    </div>
  )
}

export default Skills