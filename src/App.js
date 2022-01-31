import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const darkStyle = {
    color: 'white',
    backgroundColor: 'black'
  }
  const showAlert = (message) => {
    setAlert(message)

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled")
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route exact path='/about'>
            <div className="container">
              <Alert mode={mode} alert={alert} />
              <About mode={mode} showAlert={showAlert} />
            </div>
          </Route>
          <Route exact path='/'>
            <div className="container" id='container2'>
              <Alert mode={mode} alert={alert} />
              <Textform mode={mode} showAlert={showAlert} />
            </div>
          </Route>
          <Route exact path='/Text-Utils/'>
            <div className="container" id='container2'>
              {/* <Alert mode={mode} alert={alert} />
              <Textform mode={mode} showAlert={showAlert} /> */}
              <h1>Click on home</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
