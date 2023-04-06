import React from 'react';
import { Puff }  from 'react-loader-spinner'

export const Loading=()=>{
  console.log("Loader");
  return (
    <div>
      <div className='flex justify-center items-center'>
      <Puff
  height="80"
  width="80"
  radius={1}
  color="#3b82f6"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>


      </div>
 
    </div>
  );
}

export default Loading;
