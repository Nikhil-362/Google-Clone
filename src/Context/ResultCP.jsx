import React, { createContext,  useState } from 'react';

export const StateContext = createContext({});
// const baseUrl =`https://google-search74.p.rapidapi.com/?query=`;



export const ResultCP = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchkey, setsearchkey] = useState('');

  const [page, setPage] = useState(1);
  const RESULTS_PER_PAGE = 10;

  // const getResults = async (url, page) => {
  const getResults = async (url,page) => {
    setLoading(true);


    const startIndex = (page - 1) * RESULTS_PER_PAGE + 1;
    // const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCGvyUQY08NR1HUxSVXOXPPdIimDzd0JOQ&cx=67bf44e5bdf754906&q=${url}&start=${start}`)

    const res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyCGvyUQY08NR1HUxSVXOXPPdIimDzd0JOQ&cx=67bf44e5bdf754906&q=${url}&start=${startIndex}`)
    const data = await res.json();
      setResults(data);
      setLoading(false);
      console.log(data);
  };

  return (
    <StateContext.Provider value={{ getResults, results, loading,page, setPage, setsearchkey, searchkey}}>
      {children}
    </StateContext.Provider>
  );
};

