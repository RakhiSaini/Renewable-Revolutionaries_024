import React from 'react';

const Toolbar = ({ onSave, onExport }) => {
  return (
    <div className="p-2 border-b border-black flex space-x-2">
      <button 
        onClick={onSave} 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
      <button 
        onClick={onExport} 
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Export
      </button>
    </div>
  );
};

export default Toolbar;
