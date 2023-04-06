import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub,BsMenuButtonWideFill} from 'react-icons/bs';


function Footer() {
  return (
    <div className='flex justify-center mx-20 p-10 mt-10 border-t text-gray-600
                      dark: border-gray-700  lg:justify-left '>
                        <div className='flex text-center md:relative right-96'>
     <div className='flex hover:text-green-800'> <BsMenuButtonWideFill className='m-3'/> <a ahref=" " className='m-2 hover:text-black opacity'>Portfolio </a></div>
     <div className='flex  hover:text-blue-800'> <BsLinkedin className='m-3 '/> <a href='https://www.linkedin.com/in/nikhil-reddy-875560137/' className='m-2 hover:text-blue-800'>LinkedIn </a></div>
     <div className='flex  hover:text-black'> <BsGithub className='m-3 '/> <a href='https://github.com/Nikhil-362' className='m-2'>Github </a></div>
     <div className='flex hover:text-[#be185d]'> <BsInstagram className='m-3'/> <a href='https://www.instagram.com/Nikhil_362/'className='m-2'>Instagram </a></div>
     </div>
    </div>
  );
}

export default Footer;
