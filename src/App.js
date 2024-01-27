import React, { useState } from "react"
import Navbar from "./Components/Navbar";
import './App.css';
import Container from "./Components/Container"
import About from "./Components/About";
import Alert from "./Components/Alert"
// import { useEffect } from "react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const [theme,setTheme]=useState("light");
  const [alert,setAlert]=useState(null);

  const showAlert=(type,message)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleTheme=()=>{
    if(theme==='dark'){
      setTheme('light')
      document.body.style.backgroundColor='#fff';
      document.title='TextUtil--Light'
      showAlert('Light theme is being enabled','success')
    }else{
      setTheme('dark')
      document.body.style.backgroundColor='#4c4c4c';
      document.title='TextUtil--Dark'
      showAlert('Dark theme is being enabled','success')
    }
  }


  return (
    <>
    <Router>
      <Navbar name="About Us" theme={theme} toggleTheme={toggleTheme}/>
      <Alert alert={alert} theme={theme}/>
      <Routes>``
      <Route exact path="/" element={ <Container theme={theme} toggleTheme={toggleTheme} showAlert={showAlert}/>} /> 
      <Route exact path="/about" element={<About theme={theme} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
