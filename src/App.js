import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#15191d'
      document.body.style.color = '#fff'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#000'
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" homeText="Home" mode={mode} toggleMode={toggleMode}/>
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
