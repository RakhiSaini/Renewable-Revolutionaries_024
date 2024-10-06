import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Toolbar from '../components/Toolbar';
import Canvas from '../components/Canvas';
import Header from '../components/Header';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import PptxGenJS from 'pptxgenjs';
import { useNavigate } from 'react-router-dom';

const EditorPage = () => {
  const [slides, setSlides] = useState([{ id: Date.now(), elements: [], backgroundColor: '#fff' }]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showPresentation, setShowPresentation] = useState(false);
  const navigate = useNavigate();

  // Function to save slides as PPTX
  const savePresentationAsPPT = () => {
    let pptx = new PptxGenJS();
    slides.forEach((slide) => {
      let slidePptx = pptx.addSlide({ background: { fill: slide.backgroundColor } });
      slide.elements.forEach((element) => {
        if (element.type === 'text') {
          slidePptx.addText(element.text, {
            x: (element.left / 100) * 10, // Convert position based on slide dimension ratio
            y: (element.top / 100) * 5.63,
            fontSize: parseFloat(element.style.fontSize) || 18, // Extract numeric value from fontSize
            fontFace: element.style.fontFamily || 'Arial',
            color: element.style.color || '000000',
            w: (element.width / 100) * 10,
            h: (element.height / 100) * 5.63,
          });
        } else if (element.type === 'image') {
          slidePptx.addImage({
            data: element.src,
            x: (element.left / 100) * 10,
            y: (element.top / 100) * 5.63,
            w: (element.width / 100) * 10,
            h: (element.height / 100) * 5.63,
          });
        }
      });
    });
    pptx.writeFile({ fileName: 'presentation.pptx' });
  };

  const exportPresentation = () => {
    const dataStr = JSON.stringify(slides, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileName = 'presentation.json';
    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
  };

  const addElement = (element) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].elements.push({ ...element, id: Date.now(), left: 100, top: 100 });
    setSlides(updatedSlides);
  };

  const updateElement = (elementId, updatedProps) => {
    const updatedSlides = slides.map((slide, index) => {
      if (index !== currentSlideIndex) return slide;
      return {
        ...slide,
        elements: slide.elements.map((el) =>
          el.id === elementId ? { ...el, ...updatedProps } : el
        ),
      };
    });
    setSlides(updatedSlides);
  };

  const deleteElement = (elementId) => {
    const updatedSlides = slides.map((slide, index) => {
      if (index !== currentSlideIndex) return slide;
      return {
        ...slide,
        elements: slide.elements.filter(el => el.id !== elementId),
      };
    });
    setSlides(updatedSlides);
  };

  const setBackgroundColor = (color) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].backgroundColor = color;
    setSlides(updatedSlides);
  };

  const setFontStyle = (style) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].elements = updatedSlides[currentSlideIndex].elements.map((el) => 
      el.type === 'text' ? { ...el, style: { ...el.style, fontFamily: style } } : el
    );
    setSlides(updatedSlides);
  };

  const setFontSize = (size) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].elements = updatedSlides[currentSlideIndex].elements.map((el) => 
      el.type === 'text' ? { ...el, style: { ...el.style, fontSize: `${size}px` } } : el
    );
    setSlides(updatedSlides);
  };

  const setFontColor = (color) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].elements = updatedSlides[currentSlideIndex].elements.map((el) => 
      el.type === 'text' ? { ...el, style: { ...el.style, color } } : el
    );
    setSlides(updatedSlides);
  };

  const applyFilter = (filter) => {
    const updatedSlides = [...slides];
    updatedSlides[currentSlideIndex].elements = updatedSlides[currentSlideIndex].elements.map((el) =>
      el.type === 'image' ? { ...el, filter } : el
    );
    setSlides(updatedSlides);
  };

  const addSlide = () => {
    setSlides([...slides, { id: Date.now(), elements: [], backgroundColor: '#fff' }]);
    setCurrentSlideIndex(slides.length);
  };

  const changeSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const saveAllSlidesAsPDF = async () => {
    const pdf = new jsPDF();
    for (let i = 0; i < slides.length; i++) {
      setCurrentSlideIndex(i);
      await new Promise((resolve) => setTimeout(resolve, 0)); // Ensures state updates before capturing canvas
      const canvasElement = document.querySelector('.slide-canvas');
      const canvas = await html2canvas(canvasElement);
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    }
    pdf.save('presentation.pdf');
  };

  return (
    <div className="flex">
      <Sidebar
        addElement={addElement}
        setBackgroundColor={setBackgroundColor}
        setFontStyle={setFontStyle}
        setFontSize={setFontSize}
        setFontColor={setFontColor}
        applyFilter={applyFilter}
      />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="flex items-center justify-between p-4 bg-gray-200 border-b">
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
            onClick={addSlide}>
            Add Slide
          </button>
          <div className="flex space-x-2">
            {slides.map((slide, index) => (
              <button 
                key={slide.id} 
                className={`px-3 py-1 rounded ${currentSlideIndex === index ? 'bg-gray-300' : 'bg-white'}`}
                onClick={() => changeSlide(index)}>
                Slide {index + 1}
              </button>
            ))}
          </div>
          <div className="space-x-2">
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={savePresentationAsPPT}>
              Save as PPT
            </button>
            <button 
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={() => navigate("/slideshow")}>
              Show Slideshow
            </button>
            {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={saveAllSlidesAsPDF}>Save All as PDF</button> */}
          </div>
        </div>
        <Canvas
          elements={slides[currentSlideIndex].elements}
          updateElement={updateElement}
          deleteElement={deleteElement}
          backgroundColor={slides[currentSlideIndex].backgroundColor}
        />
      </div>
      {showPresentation && (
        <PresentationViewer
          slides={slides}
          onClose={() => setShowPresentation(false)}
        />
      )}
    </div>
  );
};

export default EditorPage;
