import React, { useContext } from 'react';
import Particles from 'react-tsparticles';
import "./Header.css";

import { ThemeContext } from "./../../themeContext";
import pBackground from '../../config/pBackground';

import HeadText from '../HeadText/HeadText';
import QuickLink from "../QuickLink/QuickLink";

function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <div 
            style={{backgroundColor: theme ? "white" : "black"}}
            id="portfolio_header"
        >
            <Particles
                id="portfolio_header-particles"
                style={{position: "absolute"}}
                height="100%"
                width='100%'
                params={pBackground}
            />

            <HeadText />
            <QuickLink />
        </div>
    )
}

export default Header