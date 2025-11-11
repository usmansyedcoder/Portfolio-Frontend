import React, { useEffect, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
  const cursorDot = useRef(null);
  const cursorCircle = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // INSTANT FOLLOW: Both dot and circle follow immediately
      if (cursorDot.current) {
        cursorDot.current.style.left = mouseX + 'px';
        cursorDot.current.style.top = mouseY + 'px';
      }
      
      if (cursorCircle.current) {
        cursorCircle.current.style.left = mouseX + 'px';
        cursorCircle.current.style.top = mouseY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursorDot.current) cursorDot.current.classList.add('hover');
      if (cursorCircle.current) cursorCircle.current.classList.add('hover');
    };

    const handleMouseLeave = () => {
      if (cursorDot.current) cursorDot.current.classList.remove('hover');
      if (cursorCircle.current) cursorCircle.current.classList.remove('hover');
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDot} className="cursor-dot" />
      <div ref={cursorCircle} className="cursor-circle" />
    </>
  );
};

export default Cursor;