import React from 'react';
import "./Skills.css";

import { AiFillHtml5 } from "react-icons/ai";
import { DiJavascript1, DiMysql, DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa";

function Skills() {
  return (
    <div id="portfolio_skills">
        <ul>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <AiFillHtml5 id="html" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>HTML</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <FaCss3Alt id="css" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>CSS</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <DiJavascript1 id="js" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>JavaScript</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <FaNodeJs id="node" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>Node.js</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <FaReact id="react" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>React</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <DiMysql id="mysql" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>MySQL</span>
                </div>
            </li>
            <li className='portfolio_skills-area'>
                <div className="portfolio_skills-area_icon">
                    <DiMongodb id="mongo" className='icon-size'/>
                    <span className='portfolio_skills-area_icon-tool_tip'>MongoDB</span>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Skills