import { useEffect, useRef, useState } from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { set_progress, updated_progress } from './Redux/Slices/Cursor';

import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  const { show_project } = useSelector((state) => state.projects);
  const { cursorProgress, needUpdateProgress } = useSelector((state) => state.cursor); // 565px is the max

  const circleRef = useRef();
  const appRef = useRef();
  const pagesRef = useRef();
  const cursorRef = useRef();

  const circleSize = 50;

  const dispatch = useDispatch();

  // With this useEffect is checks if it needs to update the scroll position
  useEffect(() => {
    if (needUpdateProgress) {
      requestAnimationFrame(() => {
        const scrollableWidth = pagesRef.current.scrollWidth - pagesRef.current.clientWidth;
        const scrolledPercentage = (pagesRef.current.scrollLeft / scrollableWidth) *  100;
        const position = (scrolledPercentage /  100) *  565;

        dispatch(set_progress(position -  565));
        dispatch(updated_progress());
      });
    }
  }, [dispatch, needUpdateProgress])

  // This checks where the mouse moves and move the cursor and scroll circle
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Check if the mouse is within the window bounds
      if (e.clientX >=  0 && e.clientX <= window.innerWidth && e.clientY >=  0 && e.clientY <= window.innerHeight) {
        // Show the circle and move it to the mouse position
        circleRef.current.style.visibility = 'visible';
        const offset = circleSize / 2;
        circleRef.current.style.top = `${e.pageY -  offset}px`; // Subtract half the size of the circle to center it on the cursor
        circleRef.current.style.left = `${e.pageX -  offset}px`; // Subtract half the size of the circle to center it on the cursor

        // cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        cursorRef.current.style.top = `${e.pageY}px`;
        cursorRef.current.style.left = `${e.pageX}px`;
      } else {
        // Hide the circle
        circleRef.current.style.visibility = 'hidden';
      }
    };
  
    document.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, [circleSize]);

  // This useEffect handles scroll on mouse wheel and drag effect
  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleScroll = (e) => {
      if (!pagesRef.current) return;
  
      if (show_project) return;

      if (window.innerWidth < 500) return;
  
      pagesRef.current.scrollTo({
        left: pagesRef.current.scrollLeft + (e.deltaY * 1.5),
        behavior: 'smooth',
        duration: 500
      });

      requestAnimationFrame(() => {
        const scrollableWidth = pagesRef.current.scrollWidth - pagesRef.current.clientWidth;
        const scrolledPercentage = (pagesRef.current.scrollLeft / scrollableWidth) * 100;
        const position = (scrolledPercentage / 100) * 565;
  
        dispatch(set_progress(position - 565));
      })
    };

    const startDragging = (e) => {
      isDown = true;
      startX = e.pageX - pagesRef.current.offsetLeft;
      scrollLeft = pagesRef.current.scrollLeft;
      circleRef.current.style.transform = 'rotate(-90deg) scale(1.2)';
      cursorRef.current.style.backgroundColor = 'var(--secondary-color-fade)';
    };
    
    const stopDragging = () => {
      isDown = false;
      circleRef.current.style.transform = 'rotate(-90deg) scale(1)';
      cursorRef.current.style.backgroundColor = 'var(--secondary-color)';
    };
    
    const move = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - pagesRef.current.offsetLeft;
      const walk = x - startX;
      pagesRef.current.scrollLeft = scrollLeft - walk;

      requestAnimationFrame(() => {
        const scrollableWidth = pagesRef.current.scrollWidth - pagesRef.current.clientWidth;
        const scrolledPercentage = (pagesRef.current.scrollLeft / scrollableWidth) * 100;
        const position = (scrolledPercentage / 100) * 565;
  
        dispatch(set_progress(position - 565));
      });
    };

    pagesRef.current.addEventListener('mousedown', startDragging);
    pagesRef.current.addEventListener('mousemove', move);
    pagesRef.current.addEventListener('mouseup', stopDragging);
    pagesRef.current.addEventListener('mouseleave', stopDragging);
    window.addEventListener("wheel", handleScroll);

    return () => {
      pagesRef.current.removeEventListener('mousedown', startDragging);
      pagesRef.current.removeEventListener('mousemove', move);
      pagesRef.current.removeEventListener('mouseup', stopDragging);
      pagesRef.current.removeEventListener('mouseleave', stopDragging);
      window.removeEventListener("wheel", handleScroll)
    }
  }, [dispatch, show_project])

  return (
    <div className="App" ref={appRef} >

      <svg id='circle' className={cursorProgress !==  0 ? "circleTransition" : ""} ref={circleRef} width={circleSize} height={circleSize} viewBox="-25 -25 250 250" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <circle r="90" cx="100" cy="100" fill="transparent" stroke="#e0e2db" strokeWidth="16px" strokeDasharray="565.48px" strokeDashoffset="0"></circle>
        <circle id="process-circle" r="90" cx="100" cy="100" stroke="#6622cc" strokeWidth="16px" strokeLinecap="round" strokeDashoffset={`${cursorProgress}px`} fill="transparent" strokeDasharray="565.48px"></circle>
      </svg>
      <div id="cursor" ref={cursorRef}></div>

      <Home id='homePage' pagesRef={pagesRef} />
      { show_project &&
        <ProjectPage />}
    </div>
  );
}

export default App;
