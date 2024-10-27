import React, { useState, useEffect } from 'react';
import LayoutContext from './components/Layout';
import './App.css';

function App() {
  return(
    <div className='min-h-screen bg-gradient-to-t from-gray-600 via-gray-700 to-gray-800 flex justify-center items-center flex-col'>
      <LayoutContext />
    </div> 
   )
};
export default App;
