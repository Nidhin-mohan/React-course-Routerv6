import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Link, Route,Navigate } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="bundles" element={<Bundles />} />
      </Route>
      <Route path="/learn/courses" element={<Courses />} />
    </Routes>
  </Router>
);

function Home(){
  return(
    <div>
      <h1> Home route</h1>
    </div>
  )
}


function Learn() {
  return (
    <div>
      <h1> Learn componet</h1>
      <h4>All courses are here</h4>
      <Link to= "/learn/courses" >course</Link>
      <Link to= "/learn/bundles" >bundles</Link>

    </div>
  );
}

function Courses() {
  return (
    <div>
      <h1> Couserse ae here</h1>
      <h4> list</h4>
      <h4> cart</h4>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>  Bundle are this</h1>

      <h4> list</h4>
      <h4> cart</h4>
    </div>
  );
}


reportWebVitals();
