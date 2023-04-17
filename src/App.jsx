import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Result from './Components/Result';

function App() {
  const [darkTheme, setdarkTheme] = useState(false);


  return (
  <div className={darkTheme? 'dark' : ''}>
      <div className='bg-gray-200  dark:bg-gray-900 dark:text-gray-200 min-h-screen overflow-x-hidden '>  

      <Navbar
        setdarkTheme={setdarkTheme}
        darkTheme={darkTheme}/>
      <Result/>
      <Footer/>
      </div>
  
  </div>
    
  );
}

export default App;

