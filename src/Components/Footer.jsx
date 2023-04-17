import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub,BsMenuButtonWideFill} from 'react-icons/bs';


function Footer() {
  return (
    <div className='flex justify-center mx-20 p-10 mt-10 border-t text-gray-600
                      dark: border-gray-700  lg:justify-left '>
                        
                        <div className='flex text-center  left-20 md:ml-10'>
     <div className=' hover:text-green-800'>  <a href='https://www.theshopli.com/' target="_blank" className='m-2 '> <BsMenuButtonWideFill className='m-3 '/>  </a></div>
     <div className=' hover:text-blue-800'> <a href='https://www.linkedin.com/in/nikhil-reddy-875560137/'target="_blank" className=' m-2 hover:text-blue-800'>  <BsLinkedin className='m-3 '/> </a></div>
     
     <div className=' hover:text-black'>  <a href='https://github.com/Nikhil-362' target="_blank" className=' m-2'> <BsGithub className='m-3 '/></a></div>
     

     <div className=' hover:text-[#be185d]'> <a href='https://www.instagram.com/Nikhil_362/' target="_blank"className=' m-2 '> <BsInstagram className='m-3'/>  </a></div>
    
     </div>
    </div>
  );
}

export default Footer;
