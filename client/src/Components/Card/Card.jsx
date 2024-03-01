import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarRateIcon from '@mui/icons-material/StarRate';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { yellow } from '@mui/material/colors';
const Card = () => {
  return (<>
  
    <div className='flex flex-wrap w-[80%] m-auto mt-4 pl-4'>
        
        <div className=' items-center pr-5 pt-5 pb-5 '>
        <div className='bg-orange-400 text-white w-[130px] h-10 p-2 rounded-r-[7px] text-center z-3 mb-4'>
        <EmojiEventsOutlinedIcon/>
            Best Choice
        </div>
            <img src={"https://i.ibb.co/J5D10nD/images.png"} className="w-[150px]"alt="" />
        </div>
        <div className='text-justify w-[60%] text-[14px] p-5'>
        <b>Lorem, ipsum dolor sit amet consectetur</b>- adipisicing elit. Dolore repudiandae ea reprehenderit 
            voluptatum illum ullam praesentium! Ea sed ut aut, culpa aliquid, doloremque unde quos nobis quae 
         <br/>
            <b>Main highlights</b>
            <br/>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque sapiente dolorum iure 
           dignissimos eum porro rerum cumque explicabo suscipit inventore quasi laborum eius ex maxime,
           vitae repudiandae aperiam voluptate?
           <div className='pt-5 text-cyan-600'>
            Show More <ArrowDropDownIcon/>
        </div>
        </div>
        <div>
            <div className='ml-4 items-center'>
                <div className='bg-blue-50 p-4 rounded-lg'>
                <div className='text-4xl p-3 text-blue-800'>
                    9.8
                </div>
                <div className=' text-blue-800 font-bold'>
                    Exceptional
                </div>
                
                <div>
                <StarRateIcon sx={{ color: yellow[500] }}/>
                <StarRateIcon sx={{ color: yellow[500] }}/>
                <StarRateIcon sx={{ color: yellow[500] }}/>
                <StarRateIcon sx={{ color: yellow[500] }}/>
                <StarRateIcon sx={{ color: yellow[500] }}/>
                </div>
                </div>
                <div className='bg-blue-500 mt-[20%] h-[30px] rounded-lg text-white'>
                    view
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Card