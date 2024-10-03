import React, { useState, useEffect } from 'react';
import './PresentationViewer.css';

const PresentationViewer = ({ slides, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [editingElementId, setEditingElementId] = useState(null);
  const [editText, setEditText] = useState('');

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleClick = (elementId) => {
    setEditingElementId(elementId);
    const element = slides[currentSlideIndex].elements.find(el => el.id === elementId);
    if (element && element.type === 'text') {
      setEditText(element.text);
    }
  };

  const handleTextChange = (e) => {
    setEditText(e.target.value);
    const updatedSlides = [...slides];
    const currentSlide = updatedSlides[currentSlideIndex];
    const elementIndex = currentSlide.elements.findIndex(el => el.id === editingElementId);
    if (elementIndex > -1) {
      currentSlide.elements[elementIndex].text = e.target.value;
      setSlides(updatedSlides);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [slides, currentSlideIndex]);

  return (
    <div className="presentation-viewer">
      <div className="header">Presentation Header</div>
      <button className="close-button" onClick={onClose}>X</button>
      <div className="slide-container">
        {slides.length > 0 && (
          <div
            className="slide-content"
            style={{
              backgroundColor: slides[currentSlideIndex].backgroundColor,
              position: 'relative',
              width: '100%',
              height: '100%',
            }}
          >
            {slides[currentSlideIndex].elements.map((element) => {
              if (element.type === 'text') {
                return (
                  <div
                    key={element.id}
                    className="text-element"
                    style={{
                      position: 'absolute',
                      left: `${element.left}px`,
                      top: `${element.top}px`,
                      fontSize: element.style.fontSize || '18px',
                      fontFamily: element.style.fontFamily || 'Arial',
                      color: element.style.color || '#000',
                      width: `${element.width}px`,
                      height: `${element.height}px`,
                      whiteSpace: 'pre-wrap',
                      border: editingElementId === element.id ? '2px dashed #000' : 'none',
                      overflow: 'hidden',
                      resize: 'both',
                      wordWrap: 'break-word',
                    }}
                    onClick={() => handleClick(element.id)}
                  >
                    {editingElementId === element.id ? (
                      <textarea
                        value={editText}
                        onChange={handleTextChange}
                        style={{
                          width: '100%',
                          height: '100%',
                          border: 'none',
                          outline: 'none',
                          background: 'transparent',
                          color: 'inherit',
                          fontSize: 'inherit',
                          fontFamily: 'inherit',
                        }}
                      />
                    ) : (
                      element.text || 'Click to edit text'
                    )}
                  </div>
                );
              } else if (element.type === 'image') {
                return (
                  <img
                    key={element.id}
                    src={element.src}
                    alt="Slide Element"
                    style={{
                      position: 'absolute',
                      left: `${element.left}px`,
                      top: `${element.top}px`,
                      width: `${element.width}px`,
                      height: `${element.height}px`,
                      filter: element.filter || 'none',
                    }}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
      <button className="prev-slide" onClick={prevSlide}>Previous</button>
      <button className="next-slide" onClick={nextSlide}>Next</button>
    </div>
  );
};

export default PresentationViewer;
