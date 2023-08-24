import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';
import { useDispatch, useSelector } from 'react-redux';

import { set_current_skill } from '../../Redux/Slices/Skills';

import Icon from '../Icon/Icon';

function Skills() {
    const icons = [
        {
            src: "/assets/png/react.png",
            name: 'React'
        },
        {
            src: "/assets/png/react.png",
            name: 'React Native'
        },
        {
            src: "/assets/png/Three.png",
            name: 'Three JS'
        },
        {
            src: "/assets/png/redux.png",
            name: 'Redux'
        },
        {
            src: "/assets/png/python.png",
            name: 'Python'
        },
        {
            src: "/assets/png/node.png",
            name: 'Node JS'
        },
        {
            src: "/assets/png/mysql.png",
            name: 'MySQL'
        },
        {
            src: "/assets/png/mongodb.png",
            name: 'MongoDB'
        },
        {
            src: "/assets/png/javascript.png",
            name: 'JavaScript'
        },
        {
            src: "/assets/png/html.png",
            name: 'HTML'
        },
        {
            src: "/assets/png/github.png",
            name: 'GitHub'
        },
        {
            src: "/assets/png/firebase.png",
            name: 'Firebase'
        },
        {
            src: "/assets/png/docker.png",
            name: 'Docker'
        },
        {
            src: "/assets/png/django.png",
            name: 'Django'
        },
        {
            src: "/assets/png/digitalocean.png",
            name: 'Digital Ocean'
        },
        {
            src: "/assets/png/css.png",
            name: 'CSS'
        }
    ]

    const dispatch = useDispatch();

    const { current_skill } = useSelector((state) => state.skills);

    const [elementHeight, setElementHeight] = useState(0);
    const [elementWidth, setElementWidth] = useState(0);
    const [showText, setShowText] = useState(false);

    const skillsRef = useRef();

    useEffect(() => {
        setElementHeight(skillsRef.current.offsetHeight);
        setElementWidth(skillsRef.current.offsetWidth);
    }, [skillsRef])

    useEffect(() => {
        if (current_skill !== '') {
            setShowText(true);
            setTimeout(() => {
                setShowText(false);
                dispatch(set_current_skill(''));
            }, 3000)
        } else {
            setShowText(false);
        }
    }, [current_skill, dispatch])

  return (
    <div id='skills'>
        <p id='skills-title'>My Skills</p>

        <div ref={skillsRef} id='skills-icons'>
            <p id='skills-text' style={{ animation: showText ? 'fadeInOut 3s' : '' }}>{current_skill}</p>

            {icons.map((icon, index) => (
                <Icon icon={icon} width={elementWidth} height={elementHeight} />
            ))}
        </div>
    </div>
  )
}

export default Skills;