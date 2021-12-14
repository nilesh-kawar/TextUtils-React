import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#15191d'
      document.body.style.color = '#fff'
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#000'
      showAlert("Light mode is enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" homeText="Home" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert}  heading="Enter the text to analyze" mode={mode}/>
      {/* <About /> */}
    </>
  );
}

export default App;
