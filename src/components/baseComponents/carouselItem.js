import React from 'react';
import '../../App.css';

const CarouselItem = ({ data, isActive }) => {
  return (
    <div className='App' style={{ display: isActive ? 'block' : 'none' }}>
      <h2 className='image'>Image carousel App</h2>
      <img src={data.url} alt={`Image ${data.id}`} />
    </div>
  );
};

export default CarouselItem;
