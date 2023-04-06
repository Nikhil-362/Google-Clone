import React,{useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import Result from './Result';


function Nav() {
  return (
    <div>
      <Routes>
      {/* <Route path="/" redirect={<Result/>} /> */}

      <Route
        path="/"
        element={<Navigate to="/search"/>} />
      
        <Route path="/search" element={<Result/>}/>
        
        {/* <Route path="/images" element={<Result/>}/>
        <Route path="/news" element={<Result/>}/>
        <Route path="/videos" element={<Result/>}/> */}
        
     
      </Routes>
    </div>
  );
}

export default Nav;
