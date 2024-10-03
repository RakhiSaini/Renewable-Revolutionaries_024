import React, { useState, useRef } from 'react';

const Sidebar = ({ addElement, setBackgroundColor, setFontStyle, setFontSize, setFontColor, applyFilter }) => {
  const [isShapesMenuOpen, setShapesMenuOpen] = useState(false);
  const [shapeColor, setShapeColor] = useState('#000000'); // Default color
  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e, type) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const element = { type: type, src: reader.result };
        addElement(element);
        if (type === 'image') {
          const img = new Image();
          img.src = reader.result;
          img.onload = () => {
            const imageElement = document.querySelector(`img[src="${reader.result}"]`);
            setSelectedImage(imageElement);
          };
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleAddImage = () => {
    imageInputRef.current.click(); 
  };

  const handleAddVideo = () => {
    videoInputRef.current.click(); 
  };

  const toggleShapesMenu = () => {
    setShapesMenuOpen(!isShapesMenuOpen);
  };

  const shapeTypes = [
    { name: 'Circle', shape: 'circle' },
    { name: 'Rectangle', shape: 'rectangle' },
    { name: 'Square', shape: 'square' },
    { name: 'Triangle', shape: 'triangle' },
    { name: 'Ellipse', shape: 'ellipse' },
    { name: 'Pentagon', shape: 'pentagon' },
    { name: 'Hexagon', shape: 'hexagon' },
    { name: 'Heptagon', shape: 'heptagon' },
    { name: 'Octagon', shape: 'octagon' },
    { name: 'Nonagon', shape: 'nonagon' },
    { name: 'Decagon', shape: 'decagon' },
    { name: 'Star', shape: 'star' },
    { name: 'Heart', shape: 'heart' },
    { name: 'Diamond', shape: 'diamond' },
    { name: 'Cross', shape: 'cross' },
    { name: 'Parallelogram', shape: 'parallelogram' },
    { name: 'Trapezoid', shape: 'trapezoid' },
    { name: 'Rhombus', shape: 'rhombus' },
    { name: 'Kite', shape: 'kite' },
    { name: 'Arrow', shape: 'arrow' },
    { name: 'Crescent', shape: 'crescent' },
    { name: 'Octagram', shape: 'octagram' },
    { name: 'Trapezium', shape: 'trapezium' },
    { name: 'Semi-circle', shape: 'semi-circle' },
    { name: 'Quarter-circle', shape: 'quarter-circle' },
    { name: 'Right-angle', shape: 'right-angle' },
    { name: 'Isosceles-triangle', shape: 'isosceles-triangle' },
    { name: 'Equilateral-triangle', shape: 'equilateral-triangle' },
    { name: 'Scalene-triangle', shape: 'scalene-triangle' },
    { name: 'Hexagram', shape: 'hexagram' },
    { name: 'Star (5 points)', shape: 'star5' },
    { name: 'Star (6 points)', shape: 'star6' },
  ];

  const fontOptions = [
    'Arial', 'Times New Roman', 'Courier New', 'Verdana', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS',
    'Trebuchet MS', 'Arial Black', 'Impact', 'Lucida Sans', 'Tahoma', 'Geneva', 'Optima', 'Candara', 'Calibri',
    'Gills Sans', 'Futura', 'Franklin Gothic', 'Rockwell', 'Perpetua', 'Monaco', 'Consolas', 'Menlo', 'Lato', 'Montserrat',
    'Open Sans', 'Roboto'
  ];

  const handleResize = (direction) => {
    if (selectedImage) {
      const resizeAmount = 10;
      const currentWidth = selectedImage.width;
      const currentHeight = selectedImage.height;

      if (direction === 'increase') {
        selectedImage.style.width = `${currentWidth + resizeAmount}px`;
        selectedImage.style.height = `${currentHeight + resizeAmount}px`;
      } else {
        selectedImage.style.width = `${currentWidth - resizeAmount}px`;
        selectedImage.style.height = `${currentHeight - resizeAmount}px`;
      }
    }
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '10px',display:'flex', flexDirection:'column', gap:'20px' }}>
      <h3>Tools</h3>
      <button onClick={() => addElement({ type: 'text', content: 'New Text', isHeader: false })}>Add Text</button>
      
      <button onClick={() => addElement({ type: 'text', content: 'Header', isHeader: true })}>Add Header</button>
      
      <button onClick={toggleShapesMenu}>
        Shapes {isShapesMenuOpen ? '▲' : '▼'}
      </button>
      
      {isShapesMenuOpen && (
        <div style={{ marginTop: '10px' }}>
          {shapeTypes.map(({ name, shape }) => (
            <div key={shape} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <button
                onClick={() => addElement({ type: 'shape', shape, color: shapeColor })}
                style={{ width: '30px', height: '30px', backgroundColor: 'lightgray', border: 'none', cursor: 'pointer' }}
              >
                <svg width="30" height="30">
                  <use href={`#${shape}`} />
                </svg>
              </button>
              <br />
              <span style={{ marginLeft: '10px' }}>{name}</span>
            </div>
          ))}
        </div>
      )}

      <h4>Shape Color</h4>
      <input type="color" value={shapeColor} onChange={(e) => setShapeColor(e.target.value)} style={{width:'150px', height:'50px', padding:'10px'}} />

      <h4>Images & Videos</h4>
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleFileChange(e, 'image')}
      />
      <input
        type="file"
        accept="video/*"
        ref={videoInputRef}
        style={{ display: 'none' }}
        onChange={(e) => handleFileChange(e, 'video')}
      />

      <button onClick={handleAddImage}>Add Image</button>
      <button onClick={handleAddVideo}>Add Video</button>

      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h5>Resize Image</h5>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',gap:'10px' }}>
            <button style={{}} onClick={() => handleResize('increase')}>Increase Size</button>
            <button onClick={() => handleResize('decrease')}>Decrease Size</button>
          </div>
        </div>
      )}

      <h4>Background</h4>
      <input type="color" onChange={(e) => setBackgroundColor(e.target.value)} style={{width:'150px', height:'50px', padding:'10px'}}/>
      
      <h4>Font Style</h4>
      <select onChange={(e) => setFontStyle(e.target.value)}>
        <option value="">Select Font Style</option>
        {fontOptions.map((font) => (
          <option key={font} value={font}>{font}</option>
        ))}
      </select>

      <h4>Font Size</h4>
      <input type="number" onChange={(e) => setFontSize(e.target.value)} placeholder="Enter font size" />

      <h4>Font Color</h4>
      <input type="color" onChange={(e) => setFontColor(e.target.value)} />

      <h4>Image Filters</h4>
      <select onChange={(e) => applyFilter(e.target.value)}>
        <option value="">None</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="blur">Blur</option>
      </select>

      <h4>Alignment</h4>
      <button onClick={() => addElement({ type: 'alignment', align: 'left' })}>Align Left</button>
      <button onClick={() => addElement({ type: 'alignment', align: 'center' })}>Align Center</button>
      <button onClick={() => addElement({ type: 'alignment', align: 'right' })}>Align Right</button>
    </div>
  );
};

export default Sidebar;
