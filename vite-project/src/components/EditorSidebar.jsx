// src/components/EditorSidebar.js
import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ type, content }) => {
  const [, drag] = useDrag({
    type: 'element',
    item: { type, content, left: 0, top: 0 },
  });

  return (
    <div ref={drag} style={{ marginBottom: '10px', cursor: 'move' }}>
      {content}
    </div>
  );
};

const EditorSidebar = () => {
  return (
    <div style={{ width: '20%', padding: '10px', borderRight: '1px solid black' }}>
      <SidebarItem type="text" content="Text" />
      <SidebarItem type="image" content="Image" />
    </div>
  );
};

export default EditorSidebar;
