import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Searchpage from './Searchpage';
import { Loading } from './Loading';
import { BiSearch } from 'react-icons/bi';

import { StateContext } from '../Context/ResultCP';

const Result=()=>{
  const { getResults, loading, results, page, setPage,searchkey, setsearchkey } = useContext(StateContext);


  useEffect(() => {
   searchkey? getResults(searchkey, page): null
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(searchkey, 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };


  if (loading) {
    return <Loading />;
  }

  return (
    <>
    <div className=''>
      <BiSearch className='relative top-14 left-80 opacity-60 md:left-96 md:w-24' />
      <div className='flex justify-center   mb-2 pt-7 md:justify-start md:ml-20 '>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            // value={searchKey}
            onChange={(e) => setsearchkey(e.target.value)}
            onKeyDown={(e) => e.keyCode === 13 ? handleSubmit(e) : null}
            className='px-10 p-2 w-80 md:w-96 rounded-3xl focus:outline dark:bg-gray-700 text-black '
            placeholder='Google Search'
          />
        </form>
      </div>
      {results?.searchInformation?.formattedTotalResults &&
      results?.searchInformation?.formattedSearchTime ? (
        <p className='opacity-60 flex flex-col justify-center ml-20 text-sm mt-3 md:justify-start'>
          About {results.searchInformation.formattedTotalResults} results (
          {results.searchInformation.formattedSearchTime} seconds)
        </p>
      ) : null}
    </div>
      <div className="-ml-12 overflow-x-hidden">
        <div className="mx-6 flex flex-wrap md:px-20 lg: lg:w-1/2 ml-20 ">
          {/* <Searchpage results={results}
                      getResults={getResults} 
                      searchkey={searchkey}
                      setsearchkey={setsearchkey}/> */}

          {results?.items &&
            results.items.map((item) => (
              <div key={item.link} className="my-5">
                <div className="flex justify-start my-1">
                  <img
                    className="w-7 h-7 rounded-3xl m-3"
                    src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                    alt={item.title}
                  />

                  <div className="weburl">
                    <a className="text-sm" href={item.link}>
                      {item.displayLink}
                    </a>
                    <p className="text-xs text-gray-500">{item.displayLink}</p>
                  </div>
                </div>

                <a className="text-blue-700 font-medium pl-4 hover:underline decoration-2 py-2" href={item.link}>
                  {item.title}
                </a>

                <p className="pl-4">{item.snippet}</p>
              </div>
            ))}
        </div>
       
      </div>
      {/* <div className='flex justify-center mt-10 md:relative right-96'>
        <button className='bg-blue-300 p-2 rounded-xl px-4 hover:bg-blue-500 mx-5' onClick={Pre}>Previous </button>
        <button className='bg-blue-300 p-2 rounded-xl px-4 hover:bg-blue-500' >{page}</button>
        
        <button className='bg-blue-300 p-2 rounded-xl px-4 hover:bg-blue-500' onClick={Next}>Next</button>
        </div>  */}
      
      {results?.items && <div className='flex justify-center p-2 text-center md:relative right-96 '>
        <button onClick={handlePrevPage} className='p-3 text-white bg-blue-400 rounded-2xl m-3 font-bold dark:bg-gray-700' >Previous</button> <div className='w-10 text-2xl m-5 text-white bg-blue-500 rounded-lg text-center '>{page}</div>
        <button onClick={handleNextPage} className='p-3 text-white bg-blue-400 rounded-2xl m-3 font-bold  dark:bg-gray-700'>Next Page</button>
        </div>
      }
    </>
  );
}

export default Result;
