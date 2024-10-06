import React, { useState, useEffect } from 'react';

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
    <div className="relative w-full h-screen flex flex-col bg-gray-100">
      <div className="text-center p-3 bg-gray-800 text-white text-xl">Presentation Header</div>
      <button
        className="absolute top-4 right-6 text-white bg-red-600 px-4 py-2 rounded cursor-pointer"
        onClick={onClose}
      >
        X
      </button>
      <div className="flex-grow flex justify-center items-center overflow-hidden">
        {slides.length > 0 && (
          <div
            className="relative w-4/5 h-4/5 border-2 border-gray-800 flex justify-center items-center"
            style={{ backgroundColor: slides[currentSlideIndex].backgroundColor }}
          >
            {slides[currentSlideIndex].elements.map((element) => {
              if (element.type === 'text') {
                return (
                  <div
                    key={element.id}
                    className={`absolute ${editingElementId === element.id ? 'border-2 border-black' : ''}`}
                    style={{
                      left: `${element.left}px`,
                      top: `${element.top}px`,
                      width: `${element.width}px`,
                      height: `${element.height}px`,
                    }}
                    onClick={() => handleClick(element.id)}
                  >
                    {editingElementId === element.id ? (
                      <textarea
                        value={editText}
                        onChange={handleTextChange}
                        className="w-full h-full bg-transparent text-inherit outline-none"
                        style={{
                          fontSize: element.style.fontSize || '18px',
                          fontFamily: element.style.fontFamily || 'Arial',
                          color: element.style.color || '#000',
                        }}
                      />
                    ) : (
                      <span
                        className="block w-full h-full"
                        style={{
                          fontSize: element.style.fontSize || '18px',
                          fontFamily: element.style.fontFamily || 'Arial',
                          color: element.style.color || '#000',
                        }}
                      >
                        {element.text || 'Click to edit text'}
                      </span>
                    )}
                  </div>
                );
              } else if (element.type === 'image') {
                return (
                  <img
                    key={element.id}
                    src={element.src}
                    alt="Slide Element"
                    className="absolute"
                    style={{
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
      <button
        className="absolute left-6 bottom-6 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute right-6 bottom-6 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default PresentationViewer;
