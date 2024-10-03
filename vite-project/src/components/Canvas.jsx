import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './Canvas.css'; // Import the CSS file for styles

const Canvas = ({ elements, updateElement, deleteElement, backgroundColor }) => {
  const [editingElementId, setEditingElementId] = useState(null);

  const handleTextChange = (e, elementId) => {
    const newContent = e.target.value;
    if (newContent !== 'New Text' && newContent !== 'Header') {
      updateElement(elementId, { content: newContent });
    }
  };

  const handleFocus = (e, elementId) => {
    const currentText = e.target.value;
    if (currentText === 'New Text' || currentText === 'Header') {
      e.target.value = ''; // Clear placeholder text
    }
  };

  const handleBlur = (e, elementId) => {
    const currentText = e.target.value;
    if (currentText.trim() === '') {
      const defaultText = elements.find(el => el.id === elementId).isHeader ? 'Header' : 'New Text';
      e.target.value = defaultText; // Restore placeholder text
      updateElement(elementId, { content: defaultText });
    } else {
      updateElement(elementId, { content: currentText });
    }
    setEditingElementId(null); // Exit editing mode
  };

  const renderShape = (shape) => {
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="50" style={{ fill: 'grey' }} />;
      case 'square':
        return <rect width="100" height="100" style={{ fill: 'grey' }} />;
      case 'rectangle':
        return <rect width="150" height="70" style={{ fill: 'grey' }} />;
      case 'triangle':
        return <polygon points="50,15 100,85 0,85" style={{ fill: 'grey' }} />;
      case 'ellipse':
        return <ellipse cx="50" cy="50" rx="60" ry="40" style={{ fill: 'grey' }} />;
      case 'pentagon':
        return <polygon points="50,15 100,40 82,85 18,85 0,40" style={{ fill: 'grey' }} />;
      case 'hexagon':
        return <polygon points="50,15 85,40 85,75 50,100 15,75 15,40" style={{ fill: 'grey' }} />;
      case 'heptagon':
        return <polygon points="50,10 90,30 100,70 75,100 25,100 0,70 10,30" style={{ fill: 'grey' }} />;
      case 'octagon':
        return <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" style={{ fill: 'grey' }} />;
      case 'nonagon':
        return <polygon points="50,10 90,30 100,70 85,100 50,90 15,100 0,70 10,30" style={{ fill: 'grey' }} />;
      case 'decagon':
        return <polygon points="50,10 90,30 100,60 85,90 65,100 35,100 15,90 0,60 10,30" style={{ fill: 'grey' }} />;
      case 'star':
        return <polygon points="50,15 61,35 85,39 68,57 72,80 50,65 28,80 32,57 15,39 39,35" style={{ fill: 'grey' }} />;
      case 'heart':
        return <path d="M50 88s-36-19-36-45c0-15 10-27 22-27 9 0 15 7 15 7s6-7 15-7c12 0 22 12 22 27 0 26-36 45-36 45z" style={{ fill: 'grey' }} />;
      case 'diamond':
        return <polygon points="50,10 90,50 50,90 10,50" style={{ fill: 'grey' }} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ flexGrow: 1, backgroundColor: backgroundColor || '#fff', position: 'relative' }}>
      {elements.map((el) => (
        <Draggable key={el.id}>
          <div
            className="element-container"
            style={{
              position: 'absolute',
              left: el.left || '100px',
              top: el.top || '100px',
              padding: '10px',
              width: el.type === 'text' || el.type === 'header' ? 'auto' : '500px',
              height: el.type === 'text' || el.type === 'header' ? 'auto' : '500px',
              backgroundColor: el.type === 'shape' ? 'transparent' : 'none',
              border: el.type === 'text' || el.type === 'header' ? '1px solid #000' : 'none',
              fontFamily: el.style?.fontFamily,
              fontSize: el.style?.fontSize,
              color: el.style?.color,
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden', 
              textAlign: 'center',
              lineHeight: 'normal', 
            }}
          >
            {el.type === 'text' || el.type === 'header' ? (
              <textarea
                value={el.content === 'New Text' || el.content === 'Header' ? '' : el.content} 
                onChange={(e) => handleTextChange(e, el.id)}
                onFocus={(e) => handleFocus(e, el.id)}
                onBlur={(e) => handleBlur(e, el.id)}
                style={{
                  minWidth: '500px', 
                  minHeight: '100px', 
                  maxWidth: '100%', 
                  maxHeight: 'none', 
                  border: 'none',
                  resize: 'both',
                  overflow: 'auto', 
                  fontFamily: el.style?.fontFamily,
                  fontSize: el.type === 'header' ? '30px' : el.style?.fontSize, 
                  fontWeight: el.type === 'header' ? 'bold' : 'normal',
                  color: el.style?.color,
                  textAlign: 'center', 
                  lineHeight: 'normal', 
                  padding: '10px', 
                }}
                autoFocus={editingElementId === el.id}
                onClick={() => setEditingElementId(el.id)}
              />
            ) : el.type === 'image' ? (
              <img src={el.src} alt="Uploaded" style={{ width: '300px', height: '300px' }} />
            ) : el.type === 'shape' ? (
              <svg width="100" height="100">
                {renderShape(el.shape)}
              </svg>
            ) : null}
            <button
              className="delete-button"
              onClick={() => deleteElement(el.id)}
            >
              X
            </button>
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Canvas;
