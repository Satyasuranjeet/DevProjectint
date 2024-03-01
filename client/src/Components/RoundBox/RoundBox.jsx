import React from 'react'

const RoundBox = (props) => {
  return (
    <div className='align-middle inline-flex justify-center bg-gray-200 rounded-xl mt-4 p-1 w-[120px] ml-2 mr-2'>
       {props.value}
    </div>
  )
}

export default RoundBox