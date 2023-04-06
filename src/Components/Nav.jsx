import React,{useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import Result from './Result';


function Nav() {
  return (
    <div>
      <Routes>
  
      
        <Route
        path="/Google-clone"
        element={<Navigate to="/search"/>} />
      
        <Route path="/search" element={<Result/>}/>
        
        
     
      </Routes>
    </div>
  );
}

export default Nav;
