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
    <div className="w-64 bg-gray-200 p-4 flex flex-col space-y-4">
      <h3 className="text-lg font-semibold">Tools</h3>
      <button 
        onClick={() => addElement({ type: 'text', content: 'New Text', isHeader: false })} 
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Text
      </button>

      <button 
        onClick={() => addElement({ type: 'text', content: 'Header', isHeader: true })} 
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Header
      </button>

      <button 
        onClick={toggleShapesMenu} 
        className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
      >
        Shapes {isShapesMenuOpen ? '▲' : '▼'}
      </button>

      {isShapesMenuOpen && (
        <div className="mt-2">
          {shapeTypes.map(({ name, shape }) => (
            <div key={shape} className="flex items-center mb-2">
              <button
                onClick={() => addElement({ type: 'shape', shape, color: shapeColor })}
                className="w-8 h-8 bg-gray-300 border-none rounded cursor-pointer"
              >
                <svg width="30" height="30">
                  <use href={`#${shape}`} />
                </svg>
              </button>
              <span className="ml-2">{name}</span>
            </div>
          ))}
        </div>
      )}

      <h4 className="text-md font-semibold">Shape Color</h4>
      <input 
        type="color" 
        value={shapeColor} 
        onChange={(e) => setShapeColor(e.target.value)} 
        className="w-full h-10 border-none rounded"
      />

      <h4 className="text-md font-semibold">Images & Videos</h4>
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        className="hidden"
        onChange={(e) => handleFileChange(e, 'image')}
      />
      <input
        type="file"
        accept="video/*"
        ref={videoInputRef}
        className="hidden"
        onChange={(e) => handleFileChange(e, 'video')}
      />

      <button 
        onClick={handleAddImage} 
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Image
      </button>
      <button 
        onClick={handleAddVideo} 
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Video
      </button>

      {selectedImage && (
        <div className="mt-4">
          <h5 className="font-semibold">Resize Image</h5>
          <div className="flex justify-between items-center gap-2">
            <button 
              onClick={() => handleResize('increase')} 
              className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
            >
              Increase Size
            </button>
            <button 
              onClick={() => handleResize('decrease')} 
              className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
            >
              Decrease Size
            </button>
          </div>
        </div>
      )}

      <h4 className="text-md font-semibold">Background</h4>
      <input 
        type="color" 
        onChange={(e) => setBackgroundColor(e.target.value)} 
        className="w-full h-10 border-none rounded"
      />

      <h4 className="text-md font-semibold">Font Style</h4>
      <select 
        onChange={(e) => setFontStyle(e.target.value)} 
        className="w-full h-10 border border-gray-300 rounded"
      >
        <option value="">Select Font Style</option>
        {fontOptions.map((font) => (
          <option key={font} value={font}>{font}</option>
        ))}
      </select>

      <h4 className="text-md font-semibold">Font Size</h4>
      <input 
        type="number" 
        onChange={(e) => setFontSize(e.target.value)} 
        placeholder="Enter font size" 
        className="w-full h-10 border border-gray-300 rounded px-2"
      />

      <h4 className="text-md font-semibold">Font Color</h4>
      <input 
        type="color" 
        onChange={(e) => setFontColor(e.target.value)} 
        className="w-full h-10 border-none rounded"
      />

      <h4 className="text-md font-semibold">Image Filters</h4>
      <select 
        onChange={(e) => applyFilter(e.target.value)} 
        className="w-full h-10 border border-gray-300 rounded"
      >
        <option value="">None</option>
        <option value="grayscale">Grayscale</option>
        <option value="sepia">Sepia</option>
        <option value="blur">Blur</option>
      </select>

      <h4 className="text-md font-semibold">Alignment</h4>
      <button 
        onClick={() => addElement({ type: 'alignment', align: 'left' })} 
        className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
      >
        Align Left
      </button>
      <button 
        onClick={() => addElement({ type: 'alignment', align: 'center' })} 
        className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
      >
        Align Center
      </button>
      <button 
        onClick={() => addElement({ type: 'alignment', align: 'right' })} 
        className="bg-gray-300 px-3 py-2 rounded hover:bg-gray-400"
      >
        Align Right
      </button>
    </div>
  );
};

export default Sidebar;
