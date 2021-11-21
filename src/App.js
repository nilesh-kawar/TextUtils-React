import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" homeText="Home" mode={mode}  />
      <TextForm heading="Enter the text to analyze"/>
      {/* <About /> */}
    </>
  );
}

export default App;
