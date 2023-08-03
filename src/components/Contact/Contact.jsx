import React, { useState, useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

import Notice from "./../Notice/Notice";

function Contact(){
    const [isVisible, setIsVisible] = useState(false);
    const [notice, setNotice] = useState(false);
    const [noticeText, setNoticeText] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [text, setText] = useState("");
    const [inputError, setInputError] = useState({
        name: {},
        email: {},
        subject: {},
        text: {},
        error: true
    })

    const sendData = () => {
        verify();
        
        let mail = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: text
        }

        if(!inputError.error){
            emailjs.send(
                // process.env.SERVICE_ID, 
                "service_34856gt",
                // process.env.TEMPLATE_ID,
                "template_6oej2fw",
                mail, 
                // process.env.USER_ID
                "user_XiAqAO8SE5exdjP8TwO0u"
            )
            .then((result) => {
                setName("");
                setEmail("");
                setSubject("");
                setText("");
    
                setNotice(true);
                setNoticeText("success")
            }).catch((err) => {
                setNotice(true);
                setNoticeText("error");
            })
        } else {
            setNotice(true);
            setNoticeText("contact error");
        }
    }

    // Need to finish added error secitons for empty or wrong inputs.
    const verify = () => {
        let temp = {
            name: {},
            email: {},
            subject: {},
            text: {},
            error: true
        }

        if(name.length === 0){
            temp.name = {border: "2px red solid"};
        }
        if(email.length === 0){
            temp.email = {border: "2px red solid"};
        }
        if(subject.length === 0){
            temp.subject = {border: "2px red solid"};
        }
        if(text.length === 0){
            temp.text = {border: "2px red solid"};
        }
        if(name !== "" && email !== "" && subject !== "" && text !== ""){
            temp.error = false;
        }

        setInputError(temp);
    }

    useEffect(() => {
        const handleScroll = () => {
          const { top } = document.getElementById('email').getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (top < windowHeight) {
            setIsVisible(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
          
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="portfolio_contact">
            <div id="email">
                <div id="email-top">
                    <input 
                        id="emailName" 
                        className="emailItem" 
                        type="text" 
                        placeholder="Name" 
                        style={{ ...inputError.name,  display: isVisible ? 'block' : 'none' }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        id="emailEmail" 
                        className="emailItem" 
                        type="text" 
                        placeholder="Email" 
                        style={{ ...inputError.email, display: isVisible ? 'block' : 'none' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <textarea 
                    id="emailMessage" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Type you message here..." 
                    rows="7" 
                    style={{ ...inputError.text, display: isVisible ? 'block' : 'none' }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <input 
                    id="emailBtn" 
                    type="button" 
                    value="Submit" 
                    onClick={() => sendData()}
                    style={{ display: isVisible ? 'block' : 'none' }}
                />
            </div>
            {notice ? <Notice notice={notice} setNotice={setNotice} noticeText={noticeText}/> : <div></div>}
        </div>
    )
}

export default Contact