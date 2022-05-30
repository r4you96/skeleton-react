import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import * as views from './view'
import {Route, Routes, Link} from "react-router-dom";

const App: React.FC = () => {
  return (
      <div>
          <h1>This is Web</h1>
          <ul>
              <li>
                  <Link to="/main">Post #1</Link>
              </li>
              <li>
                  <Link to="2">Post #2</Link>
              </li>
              <li>
                  <Link to="3">Post #3</Link>
              </li>
              <li>
                  <Link to="4">Post #4</Link>
              </li>
          </ul>
          <Routes>
              <Route path="" element={<views.mainView/>}/>
          </Routes>
      </div>
  );
}

export default App;
