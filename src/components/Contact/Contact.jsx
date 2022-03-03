import React, { useState } from "react";
import "./Contact.css";
// import emailjs from "emailjs-com";

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
        text: {}
    })

    const sendData = () => {
        setNotice(true);
        setNoticeText("test");
        // let mail = {
        //     from_name: name,
        //     from_email: email,
        //     subject: subject,
        //     message: text
        // }

        // emailjs.send(
        //     process.env.SERVICE_ID, 
        //     process.env.TEMPLATE_ID, 
        //     mail, 
        //     process.env.USER_ID
        // )
        // .then((result) => {
        //     // console.log(result)
        //     setNotice(true);
        //     setNoticeText("success")
        // }).catch((err) => {
        //     // console.log(err.text)
        //     setNotice(true);
        //     setNoticeText("error");
        // })
    }

    // Need to finish added error secitons for empty or wrong inputs.
    // const verify = () => {
    //     if (name === "" || email === "" || subject === "" || text === ""){
    //         if(name === ""){
    //             setInputError({...inputError, name:{borderColor: "red"}})
    //         }
    //         if(email === ""){
    //             setInputError({...inputError, email:{borderColor: "red"}})
    //         }
    //         if(subject === ""){
    //             setInputError({...inputError, subject:{borderColor: "red"}})
    //         }
    //         if(text === ""){
    //             setInputError({...inputError, text:{borderColor: "red"}})
    //         }
    //     }
    // }

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
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        id="emailEmail" 
                        className="emailItem" 
                        type="text" 
                        placeholder="Email" 
                        style={inputError.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <input 
                    id="emailSub" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Subject" 
                    style={inputError.subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea 
                    id="emailMessage" 
                    className="emailItem" 
                    type="text" 
                    placeholder="Type you message here..." 
                    rows="7" 
                    style={inputError.text}
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