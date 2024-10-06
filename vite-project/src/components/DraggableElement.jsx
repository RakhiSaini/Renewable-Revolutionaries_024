import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableElement = ({ id, left, top, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { id, left, top },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className="absolute"
      style={{ left, top, opacity: isDragging ? 0.5 : 1 }}
    >
      {children}
    </div>
  );
};

export default DraggableElement;
