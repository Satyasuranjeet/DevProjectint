import React from 'react';
import RoundBox from '../RoundBox/RoundBox';

const SmallBox = () => {
  // Your list of items
  const items = ['Tools', 'AWS Builder', 'Start Build', 'Build Supplies', 'Tooling', 'BlueHosting'];

  // Calculate the number of items per row based on screen size
  const itemsPerRow = Math.floor(window.innerWidth / 200); // Adjust 200 based on desired box width

  return (
    <div className='flex flex-wrap w-[80%] m-auto'>
      {items.map((item, index) => (
        <RoundBox key={index} value={item} className={`m-1 ${index % itemsPerRow === 0 ? 'mr-auto' : ''}`} />
      ))}
    </div>
  );
};

export default SmallBox;
