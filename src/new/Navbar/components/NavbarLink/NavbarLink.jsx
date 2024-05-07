import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import './NavbarLink.css';

import HandleScrollTo from "../../utils/HandleScrollTo";

export default function NavbarLink({ name, href }) {
    const dispatch = useDispatch();

    const [hover, setHover] = useState(false);

    const hidden = { opacity: 0, y: -100, transition: { duration: 0.5, ease: "easeInOut" } };
    const visible = { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } };

    return (
        <motion.div 
            className='navbar-link' 
            onClick={() => {
                HandleScrollTo(dispatch, href);
            }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
        >
            <p>{name}</p>

            <motion.div 
                className='navbar-link-active'
                initial={hidden}
                animate={hover ? visible : hidden}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </motion.div>
    );
};