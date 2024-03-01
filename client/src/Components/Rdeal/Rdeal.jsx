import React from 'react'
import Hcard from '../HCard/Hcard'
const Rdeal = () => {
  return (
<>
     <div className='text-2xl font-bold text-left w-[80%] m-auto mt-8 mb-4'>Related deals you might like for</div>
    <div className='flex items-center content-around w-[80%] m-auto'>
        <div className='m-3'>
        <Hcard/>
        </div>
        <div className='m-3'>
        <Hcard/>
        </div>
        <div className='m-3'> 
        <Hcard/>
        </div>
        
        
    </div>
    </>
  )
}

export default Rdeal