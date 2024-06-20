import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import File from './Components/File';
import './App.css';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/file' element={<File />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
