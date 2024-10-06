import React, { useState, useEffect, useRef } from 'react';
import { Slide1, Slide2, Slide3 } from './lastslides';
import { useNavigate } from 'react-router-dom';

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

function Presentation({ autoPlayInterval = 2000 }) {
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
            intervalRef.current = setInterval(nextSlide, autoPlayInterval);
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleMouseMove = () => {
        setShowControls(true);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setShowControls(false), 3000); // Hide controls after 3 seconds of inactivity
    };

    return (
        <div className="relative w-full h-screen bg-black text-white" onMouseMove={handleMouseMove} onKeyDown={(e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') previousSlide();
        }} tabIndex={0} aria-live="polite">
            <div className="flex justify-center items-center h-full">
                {slides[currentSlide]}
            </div>
            {/* Controls */}
            {showControls && (
                <div className="absolute inset-x-0 bottom-8 flex justify-center space-x-4">
                    <button onClick={previousSlide} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                        {prevIcon}
                    </button>
                    <button onClick={togglePlayPause} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                        {isPlaying ? pauseIcon : playIcon}
                    </button>
                    <button onClick={nextSlide} className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
                        {nextIcon}
                    </button>
                </div>
            )}
            {/* Close Button */}
            {showControls && (
                <button className="absolute top-4 right-4 text-xl p-2 rounded-full bg-gray-700 hover:bg-gray-600" onClick={() => navigate('/editor')}>
                    ✖
                </button>
            )}
        </div>
    );
}

export default Presentation;
