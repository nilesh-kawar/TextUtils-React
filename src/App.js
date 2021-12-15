import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
  const toggleModeDark = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#15191d'
      document.body.style.color = '#fff'
      showAlert("Dark mode is enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#eefaff'
      document.body.style.color = '#000'
      showAlert("Light mode is enabled", "success")
    }
  }
  const toggleModeBlue = () => {
    setMode('primary')
    document.body.style.backgroundColor = '#074b6a'
    document.body.style.color = '#fff'
    showAlert("Blue mode is enabled", "success")
  }
  const toggleModeGreen = () => {
    setMode('success')
    document.body.style.backgroundColor = '#034a06'
    document.body.style.color = '#fff'
    showAlert("Green mode is enabled", "success")
  }
  const toggleModeYellow = () => {
    setMode('warning')
    document.body.style.backgroundColor = '#bb9420'
    document.body.style.color = '#fff'
    showAlert("Green mode is enabled", "success")
  }
  const toggleModeRed = () => {
    setMode('danger')
    document.body.style.backgroundColor = '#dd544a'
    document.body.style.color = '#fff'
    showAlert("Green mode is enabled", "success")
  }

  return (
    <Router>
      <Navbar 
        title="TextUtils" 
        aboutText="About Us" 
        homeText="Home" 
        mode={mode} 
        toggleModeDark={toggleModeDark} 
        toggleModeBlue={toggleModeBlue}
        toggleModeGreen={toggleModeGreen}
        toggleModeYellow={toggleModeYellow}
        toggleModeRed={toggleModeRed}
      />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={
          <TextForm 
            showAlert={showAlert}  
            mode={mode}
            heading="Enter the text to analyze" 
          />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
