import React from 'react';
import './Header.css';

export const Header = ({ onSave, onExport }) => {
  return (
    <div className="header">
      <h1>Slide Master</h1>
      {/* <div className="header-buttons">
        <button onClick={onSave}>Save as PPT</button>
        <button onClick={onExport}>Export as JSON</button>
      </div> */}
    </div>
  );
};

export default Header;
