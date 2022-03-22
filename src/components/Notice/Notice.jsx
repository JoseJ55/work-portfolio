import React, { useState, useEffect } from "react";
import "./Notice.css";

import { AiOutlineClose } from "react-icons/ai";

function Notice({notice, setNotice, noticeText}) {
    const [text, setText] = useState("");
    const changeText = () => {
        if(noticeText === "error"){
            setText("Error: Try again later! (If this error procceds contact email directly.)");
        } else if (noticeText === "contact error") {
            setText("One or more field(s) are empty.")
        } else if (noticeText === "test") {
            setText("Email and notification is still being worked on! Sorry, but do try again later.")
        } else {
            setText("Your message was sent successful!");
        }
    }

    useEffect(() => {
        changeText();

        setTimeout(() => {
            setNotice(false)
        }, 1000 * 60)
    }, []);

    return (
        <div id="notice">
            <p>{text}</p>
            <button onClick={() => setNotice(false)}><AiOutlineClose id="notice-close"/></button>
        </div>
    )
}

export default Notice;