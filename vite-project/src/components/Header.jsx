import React from 'react';

export const Header = ({ onSave, onExport }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold">Slide Master</h1>
      {/* Uncomment below when needed */}
      {/* <div className="space-x-4">
        <button onClick={onSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save as PPT
        </button>
        <button onClick={onExport} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Export as JSON
        </button>
      </div> */}
    </div>
  );
};

export default Header;
