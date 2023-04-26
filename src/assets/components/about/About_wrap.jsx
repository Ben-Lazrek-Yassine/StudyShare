import React from 'react';
import GlobalStyles from './globalStyles'
import  Navbar from './Navbar/Navbar';
import Home from './HomePage/Home';


function App() {
  return (
    
      <>
          <GlobalStyles />
          <Navbar />
          <Home/>
      </>
        
    
  );
}

export default App;
