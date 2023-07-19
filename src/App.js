import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
//  import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = React.useState('light');
  const [alert, setAlert] = React.useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
      
  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
     document.body.style.backgroundColor= '#342f2f';
     showAlert(" dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert(" Light mode has been enabled","success")
    }
   
  }
  return (
    <>
<Router>
    {/* <Navbar title="TextHelper" aboutText="About us"/> */}
    <Navbar title="TextHelper" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
   
    <div className='container my-3'>
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
         
          <Route exact 
        path="/">
          <TextForm showAlert={showAlert} heading="Try TextHelper- Word Counter, Character Counter ,Audio" mode={mode}/>
          </Route>
        </Switch>
        </div>
        </Router>
     
     
    
    </>
  );
}

export default App;
