import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ResponsivePie } from '@nivo/pie'
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const data = [
    {
      "id": "hack",
      "label": "hack",
      "value": 221,
      "color": "hsl(78, 70%, 50%)"
    },
    {
      "id": "haskell",
      "label": "haskell",
      "value": 72,
      "color": "hsl(342, 70%, 50%)"
    },
    {
      "id": "python",
      "label": "python",
      "value": 116,
      "color": "hsl(42, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 232,
      "color": "hsl(193, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 468,
      "color": "hsl(273, 70%, 50%)"
    }
    ];
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
            <div style={{ display : "flex", width : "70vw",height : "30vh", marginBottom : "20vh"}}>
          <ResponsivePie data = {data}></ResponsivePie>
          </div>
      </Carousel.Item>
    
    </Carousel>
  );
};
export default ControlledCarousel;