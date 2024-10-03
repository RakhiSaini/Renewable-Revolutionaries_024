// src/components/Toolbar.js
import React from 'react';

const Toolbar = ({ onSave, onExport }) => {
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid black' }}>
      <button onClick={onSave}>Save</button>
      <button onClick={onExport}>Export</button>
    </div>
  );
};

export default Toolbar;
