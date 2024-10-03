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
    <div className="slideshow-viewer" style={styles.viewer}>
      <div className="slide-content" style={{ ...styles.slide, backgroundColor: slides[currentSlideIndex].backgroundColor }}>
        {slides[currentSlideIndex].elements.map((element) => (
          <div
            key={element.id}
            style={{
              position: 'absolute',
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
            {element.type === 'image' && <img src={element.src} alt="slide-element" style={{ width: '100%', height: '100%' }} />}
          </div>
        ))}
      </div>
      <button onClick={onClose} style={styles.closeButton}>Close Slideshow</button>
    </div>
  );
};

const styles = {
  viewer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    position: 'relative',
    width: '80%',
    height: '80%',
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default SlideshowViewer;
