import React from 'react'

const Scompo = () => {
  return (
    <div className='flex w-[80%] m-auto content-center p-6'>
        <div className='text-3xl w-[50%] text-start'>
                   Sign up and get exclusive spical deals
        </div>
        <div className='flex w-[50%] content-center '>
            <input className='ml-[180px] w-400px h-[40px] mt-auto mb-auto rounded-l-[7px] bg-slate-50' type="text" />
            <button className=' h-[40px] w-[70px] rounded-r-[7px] bg-blue-500 mt-auto mb-auto'>Sign up</button>
        </div>
    </div>
  )
}

export default Scompo