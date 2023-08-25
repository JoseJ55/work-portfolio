import React, { useCallback, useState } from 'react';
import './ProjectTabs.css';

import { useDispatch } from 'react-redux';
import { set_current_project, set_hover_project, set_show_project } from '../../Redux/Slices/Projects';

function ProjectTabs({ data }) {
    const dispatch = useDispatch();

    const [animate, setAnimate] = useState('');

    const handleHover = useCallback(() => {
        dispatch(set_hover_project(data.id));
        setAnimate('animateHover');
    }, [data.id, dispatch])

    const handleLeave = useCallback(() => {
        setAnimate('');
    }, [])

  return (
    <div className='tabs'>
        <div className='tab-icons' style={{ animation: `${animate} 1s ease`}}>
            <div className='icon-left'></div>
            <div className='icon-right'></div>
        </div>

        <button 
        className='projects-tab' 
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={() => {
            dispatch(set_current_project(data.id));
            dispatch(set_show_project(true));
        }}>
            {data.title}
        </button>
    </div>
  )
}

export default ProjectTabs;