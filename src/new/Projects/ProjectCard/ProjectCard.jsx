import React, { useEffect, useRef } from 'react';
import './ProjectCard.css';

import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from 'react-icons/cg';

function ProjectCard({ project }) {
    const containerRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                const scrollPercentage = entry.intersectionRatio;
                const left = entry.boundingClientRect.left;

                if (backgroundRef.current) {
                    if (scrollPercentage && left > 0) {
                        const horizontalMovement = 20; 
                        // const newBackgroundPosition = `${Math.max(0, Math.min(horizontalMovement, scrollPercentage * horizontalMovement))}% center`;
                        // stickyRef.current.style.backgroundPosition = newBackgroundPosition;
                        const newTransform = `translateX(${-10 - Math.max(0, Math.min(horizontalMovement, scrollPercentage * horizontalMovement))}%)`;
                        backgroundRef.current.style.transform = newTransform;
                    }
    
                    backgroundRef.current.style.opacity = left < 0 ? 0.6 : 1;
                }
            },
            {
                threshold: Array.from({ length: 11 }, (_, i) => i * 0.1)
            }
        );

        const mobileObserver = new IntersectionObserver(
            ([entry]) => {
                const scrollPercentage = entry.intersectionRatio;
                const top = entry.boundingClientRect.top;

                if (backgroundRef.current) {
                    if (scrollPercentage && top > 0) {
                        const verticalMovement = 20; 
                        
                        const newTransform = `translateY(${-10 - Math.max(0, Math.min(verticalMovement, scrollPercentage * verticalMovement))}%)`;
                        backgroundRef.current.style.transform = newTransform;
                    }
    
                    backgroundRef.current.style.opacity = top < 0 ? 0.6 : 1;
                }
            },
            {
                threshold: Array.from({ length: 11 }, (_, i) => i * 0.1)
            }
        );

        if (containerRef.current && window.innerWidth > 500) {
            observer.observe(containerRef.current);
        }

        if (containerRef.current && window.innerWidth <= 500) {
            mobileObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div className='project' ref={containerRef}>
            {/* <div 
                className={`project-image ${stuck && 'image-stuck'}`}
                ref={stickyRef} 
                style={{ backgroundImage: `url(${project.images[0]})`, zIndex: project.id + 100}}>
            </div> */}
            <div class="project-image">
                <div class="background" ref={backgroundRef} style={{ backgroundImage: `url(${project.images[0]})`, zIndex: project.id + 100}}></div>
            </div>

            <div className='project-info' style={{ zIndex: project.id + 101}}>
                <div className='project-head'>
                    <p className='project-title'>{project.title}</p>
                    
                    <div className='project-links'>
                        {project?.links?.github && <a 
                            className='project-link'
                            target="_blank"
                            rel='noopener noreferrer'
                            href={project?.links?.github}
                        >
                            <p className='link-title'>Github</p>
                            <AiFillGithub className="project-icon"/>
                            <div className='link-shape'></div>
                        </a>}
                        {project?.links?.live && <a 
                            className='project-link'
                            target="_blank"
                            rel='noopener noreferrer'
                            href={project?.links?.live}
                        >
                            <p className='link-title'>Live</p>
                            <CgWebsite className="project-icon"/>
                            <div className='link-shape'></div>
                        </a>}
                    </div>
                </div>

                <div className='project-text'>
                    <p className='project-desc'>{project.description}</p>
                    
                    <div className='project-text-sub'>
                        {project?.design && <div className='text-section'>
                            <p className='text-sub-title'>Design</p>
                            <p>{project?.design}</p>
                        </div>}
                        {project?.website && <div className='text-section'>
                            <p className='text-sub-title'>Tech</p>
                            <p>{project?.website}</p>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard