import React from 'react';
import './App.css';
import { adviceGenerator } from './dataServices/dataServices';
import { useEffect } from 'react';



function App() {


  useEffect(() =>{
    const adviceEffect = async () =>{
      const fetchData = await adviceGenerator();
      // adviceEffect(fetchData);
      console.log(fetchData)
    }
    adviceEffect();
  }, );
  


  return (
  <>

  
  
  <p>hello world</p>
  
  </>
  );
}

export default App;
