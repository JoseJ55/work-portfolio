import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Notice from "./../Notice/Notice";

// require('dotenv').config();

function Contact(){
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
        // setNotice(true);
        // setNoticeText("test");

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
                // console.log(result)
                setName("");
                setEmail("");
                setSubject("");
                setText("");
    
                setNotice(true);
                setNoticeText("success")
            }).catch((err) => {
                // console.log(err)
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

    return (
        <div id="portfolio_contact">
            <div id="contact">
                <h2 id="contactTitle">GET IN TOUCH</h2>
                <p className="contactItem">Email: <a href="mailto:josejimenez826@gmail.com">josejimenez826@gmail.com</a></p>
                <p className="contactItem">Phone: 1-(760)-221-2790</p>
                <div id="contactIcons">
                    <a href="https://github.com/JoseJ55"><AiFillGithub className="icon"/></a>
                    <a href="https://www.linkedin.com/in/jose-jimenez-238453169"><AiFillLinkedin className="icon"/></a>
                </div>
            </div>

            <div id="email">
                <div id="email-top">
                    <input 
                        id="emailName" 
                        className="emailItem" 
                        type="text" 
                        placeholder="Name" 
                        style={inputError.name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        id="emailEmail" 
                        className="emailItem" 
                        type="text" 
                        placeholder="Email" 
                        style={inputError.email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input 
                    id="emailSub" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Subject" 
                    style={inputError.subject}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    id="emailMessage" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Type you message here..." 
                    rows="7" 
                    style={inputError.text}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                
                <input 
                    id="emailBtn" 
                    type="button" 
                    value="Submit" 
                    onClick={() => sendData()}
                    // onClick={() => {
                    //     console.log(name)
                    //     console.log(email)
                    //     console.log(subject)
                    //     console.log(text)
                    // }}
                />
            </div>
            {notice ? <Notice notice={notice} setNotice={setNotice} noticeText={noticeText}/> : <div></div>}
        </div>
    )
}

export default Contact