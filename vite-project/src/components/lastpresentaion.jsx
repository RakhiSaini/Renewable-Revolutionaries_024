import "./lastshow.css"
import { useNavigate } from 'react-router-dom'

// src/components/Presentation.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Slide1, Slide2, Slide3 } from './lastslides';
// import './Presentation.css';

const slides = [<Slide1 key={1} />, <Slide2 key={2} />, <Slide3 key={3} />];

const playIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const pauseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
        <path d="M6 19h4V5H6v14zM14 5v14h4V5h-4z" />
    </svg>
);

const prevIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
        <path d="M12 4v16l-8-8zM14 4h2v16h-2z" />
    </svg>
);

const nextIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="24px" height="24px">
        <path d="M12 20V4l8 8-8 8zm-2-8v8H8V4h2v8z" />
    </svg>
);

function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef(null);
    const [showControls, setShowControls] = useState(false);
    const timeoutRef = useRef(null);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setIsPlaying(false);
        } else {
            intervalRef.current = setInterval(nextSlide, 2000); // Change slide every 2 seconds
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleMouseMove = () => {
        setShowControls(true);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            setShowControls(false);
        }, 3000); // Hide after 3 seconds of inactivity
    };

    return (
        <div className="presentation" onMouseMove={handleMouseMove}>
            <div className="slide">
                {slides[currentSlide]}
            </div>
            <div className={`controls ${showControls ? 'show' : ''}`}>
                <button onClick={previousSlide}>{prevIcon}</button>
                <button onClick={togglePlayPause}>{isPlaying ? pauseIcon : playIcon}</button>
                <button onClick={nextSlide}>{nextIcon}</button>
            </div>
            {showControls && <div className="close-button" onClick={()=>{navigate("/editor")}}>✖</div>}
        </div>
    );
}

export default Presentation;
