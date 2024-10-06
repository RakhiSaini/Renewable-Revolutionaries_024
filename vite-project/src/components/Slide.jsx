// src/components/Slide.js
import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableElement from './DraggableElement';

const Slide = ({ elements, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'element',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      onDrop(item.id, left, top);
    },
  });

  return (
    <div ref={drop} className="relative w-full h-full">
      {elements.map((element) => (
        <DraggableElement key={element.id} id={element.id} left={element.left} top={element.top}>
          {element.content}
        </DraggableElement>
      ))}
    </div>
  );
};

export default Slide;
