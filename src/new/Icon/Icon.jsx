import React, { useState, useEffect, useCallback } from 'react';
import './Icon.css';

import { useDispatch, useSelector } from 'react-redux';
import { set_current_skill } from '../../Redux/Slices/Skills';

function Icon({ icon, width, height }) {
    const dispatch = useDispatch();

    const { current_skill } = useSelector((state) => state.skills);

    const [onTop, setOnTop] = useState(false);
    const [place, setPlace] = useState({ width: 0, height: 0 })

    const genRandom = useCallback(() => {
        let x = Math.floor(Math.random() * (width - (width * 0.1)));
        let y = Math.floor(Math.random() * (height - (height * 0.1)));

        setPlace({
            width: x,
            height: y
        });
    }, [width, height]);

    const handleHover = () => {
        if(!onTop) setOnTop(true);
        else setOnTop(false);
    }

    const handleClick = useCallback(() => {
        if (current_skill !== '') return;

        dispatch(set_current_skill(icon.name))
    }, [dispatch, icon.name, current_skill])

    useEffect(() => {
        genRandom();
    }, [genRandom])
    

    return (
        <div 
        onMouseEnter={handleHover} 
        onMouseLeave={handleHover}
        onClick={handleClick}
        className='skills-icon' 
        style={{ top: place.height, left: place.width, zIndex: onTop ? 10 : 1 }}
        >
            <img src={icon.src} alt={`${icon.name} icon`} />
        </div>
    )
}

export default Icon