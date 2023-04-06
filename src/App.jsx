import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  const [darkTheme, setdarkTheme] = useState(false);


  return (
  <div className={darkTheme? 'dark' : ''}>
      <div className='bg-gray-200  dark:bg-gray-900 dark:text-gray-200 min-h-screen overflow-x-hidden '>  

      <Navbar
        setdarkTheme={setdarkTheme}
        darkTheme={darkTheme}/>
      <Nav/>
      <Footer/>
      </div>
  
  </div>
    
  );
}

export default App;

