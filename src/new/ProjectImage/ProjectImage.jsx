import React, { useEffect, useState, memo } from 'react';
import './ProjectImage.css';

import { useSelector } from 'react-redux';

function ProjectImage({ data }) {

    const { current_project, hover_project } = useSelector((state) => state.projects);

    const [current, setCurrent] = useState(data[0].images[0]);

    useEffect(() => {
        const temp = data.filter((project) => {
            return project.id === hover_project;
        });

        setCurrent(temp[0].images[0]);
    }, [hover_project, data])

    // useEffect(() => {
    //     const temp = data.filter((project) => {
    //         return project.id === current_project;
    //     });

    //     setCurrent(temp[0].images[0]);
    // }, [current_project, data])

  return (
    <>
        <img id='project-images' src={current} alt={`Project Sample`} />
    </>
  )
}

export default memo(ProjectImage);