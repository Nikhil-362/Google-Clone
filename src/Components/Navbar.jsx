import React from 'react';
import {Link} from 'react-router-dom'
import Searchpage from './Searchpage';

function Navbar({darkTheme, setdarkTheme}) {
  return (
    <div className='p-5 w-screen'>
      <div className='flex justify-between'>
      <Link to='/'>
          <p className='bg-blue-500 text-white px-3 py-1.5 rounded-3xl ml-10 md:ml-20
                   dark:bg-gray-700'>Google 🔍 </p>
           
          </Link>
          <button type='button' className='bg-gray-700 text-white px-3 py-1.5 rounded-3xl mr-12 md:mr-20
                                           dark:bg-gray-700' onClick={()=>{setdarkTheme(!darkTheme)}}>{darkTheme? 'Light Mode':'Dark Mode'}</button>
          
      </div>
    </div>
  );
}

export default Navbar;
