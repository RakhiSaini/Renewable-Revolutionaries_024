import React, { useState } from 'react';

const ElementProperties = ({ selectedElement, updateElement }) => {
  const [fontSize, setFontSize] = useState(selectedElement.fontSize || 16);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    updateElement({ ...selectedElement, fontSize: e.target.value });
  };

  return (
    <div>
      <label>
        Font Size:
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
        />
      </label>
    </div>
  );
};

export default ElementProperties;
