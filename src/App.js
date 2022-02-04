import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header'
import Sprints from './components/Sprints'
import About from './components/About'
import Resources from './components/Resources'
import ReactHelp from './components/ReactHelp'
import Retro from './components/Retro'

import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  // Try sometime - Provider basename={process.env.PUBLIC_URL}
  return (
    <Router>
      <div>
        <Header />
        <div className="container" style={{paddingTop: '75px'}}>
          <Routes>
            <Route exact path="/" element= { <Sprints/> } />
            <Route exact path="/retrospective" element= { <Retro/> } />
            <Route exact path="/reacthelp" element= { <ReactHelp/> } />
            <Route exact path="/about" element= { <About/> } />
            <Route exact path="/resources" element= { <Resources/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;