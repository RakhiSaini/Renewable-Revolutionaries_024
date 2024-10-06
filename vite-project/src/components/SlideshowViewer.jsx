import React, { useEffect, useState } from 'react';

const SlideshowViewer = ({ slides, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [slides.length]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center">
      <div className="relative w-4/5 h-4/5 overflow-hidden" style={{ backgroundColor: slides[currentSlideIndex].backgroundColor }}>
        {slides[currentSlideIndex].elements.map((element) => (
          <div
            key={element.id}
            className="absolute"
            style={{
              left: element.left,
              top: element.top,
              width: element.width,
              height: element.height,
              color: element.style?.color,
              fontSize: element.style?.fontSize,
              fontFamily: element.style?.fontFamily,
              filter: element.filter,
            }}
          >
            {element.type === 'text' && <div>{element.text}</div>}
            {element.type === 'image' && <img src={element.src} alt="slide-element" className="w-full h-full object-cover" />}
          </div>
        ))}
      </div>
      <button onClick={onClose} className="absolute top-5 right-5 px-4 py-2 bg-gray-800 text-white font-semibold rounded cursor-pointer">
        Close Slideshow
      </button>
    </div>
  );
};

export default SlideshowViewer;
