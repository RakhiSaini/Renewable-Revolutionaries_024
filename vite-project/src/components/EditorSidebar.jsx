import React from 'react';
import { useDrag } from 'react-dnd';

const SidebarItem = ({ type, content }) => {
  const [, drag] = useDrag({
    type: 'element',
    item: { type, content, left: 0, top: 0 },
  });

  return (
    <div ref={drag} className="mb-2 cursor-move">
      {content}
    </div>
  );
};

const EditorSidebar = () => {
  return (
    <div className="w-1/5 p-2 border-r border-black">
      <SidebarItem type="text" content="Text" />
      <SidebarItem type="image" content="Image" />
    </div>
  );
};

export default EditorSidebar;
