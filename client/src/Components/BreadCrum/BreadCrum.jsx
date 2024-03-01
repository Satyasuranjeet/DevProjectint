import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const BreadCrum = () => {
  return (
    <div className='flex flex-wrap w-[80%] m-auto mt-4 pl-4'>
      <div className="flex items-center mb-2">
        Home
        <KeyboardArrowRightIcon />
      </div>
      <div className="flex items-center mb-2">
        Hosting for all
        <KeyboardArrowRightIcon />
      </div>
      <div className="flex items-center mb-2">
        Hosting
        <KeyboardArrowRightIcon />
      </div>
      <div className="flex items-center mb-2">
        Hosting
        <KeyboardArrowRightIcon />
      </div>
      <div className="flex items-center mb-2">
        Hosting
      </div>
    </div>
  );
};

export default BreadCrum;
