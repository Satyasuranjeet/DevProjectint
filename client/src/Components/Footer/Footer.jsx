import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export const Footer = () => {
  return (
    <footer class="bg-gray-800 ">
  <div className='text-white px-4 py-8 flex justify-between items-center w-[80%] m-auto'>
  <div class="flex flex-col space-y-4 text-justify ">
    <h3 class="text-xl font-semibold ">CATEGORIES</h3>
    <a href="#" class="hover:text-gray-400 text-sm">Web Builder</a>
    <a href="#" class="hover:text-gray-400 text-sm">Hosting</a>
    <a href="#" class="hover:text-gray-400 text-sm">Robotic Automation</a>
    <a href="#" class="hover:text-gray-400 text-sm ">Data Center</a>
  </div>
  <div class="flex flex-col space-y-4 text-justify">
    <h3 class="text-xl font-semibold">CONTACT</h3>
    <a href="#" class="hover:text-gray-400 text-sm">Contact</a>
    <a href="#" class="hover:text-gray-400 text-sm">Privacy Policy</a>
    <a href="#" class="hover:text-gray-400 text-sm">Terms of Service</a>
    <a href="#" class="hover:text-gray-400 text-sm">About</a>
  </div>
  <div className='flex flex-col space-y-4'>
  <div className='pt-5'>
            United States <ArrowDropDownIcon/>
        </div>
  </div>
  <div className='flex flex-col space-y-4'>
  
  </div>
  </div>
</footer>

  )
}
