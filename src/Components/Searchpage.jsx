import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

function Searchpage({ getResults, results, setsearchkey, searchkey}) {
  // const [searchKey, setSearchKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    getResults(searchkey, 1);
  };

  return (
    <div className=''>
      <BiSearch className='relative top-14 left-80 opacity-50' />
      <div className='flex justify-center  ml-14 mb-2 pt-7 md:justify-start '>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            // value={searchKey}
            onChange={(e) => setsearchkey(e.target.value)}
            onKeyDown={(e) => e.keyCode === 13 ? handleSubmit(e) : null}
            className='pl-5 p-2 w-80 rounded-3xl focus:outline dark:bg-gray-700 text-black '
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
  );
}

export default Searchpage;
