import React from "react";
import './MobileLink.css';

export default function MobileLink({ name, idName, handleNav }) {
    const handleClick = (e) => {
        let home = document.getElementById("home");
        let contact = document.getElementById(idName);

        e.preventDefault();
        home && contact.scrollIntoView({ behavior: "smooth", block: "start"});

        handleNav()
    };

    return (
        <div className='navbar-open-item' onClick={handleClick}>
            <p>{name}</p>
        </div>
    );
};