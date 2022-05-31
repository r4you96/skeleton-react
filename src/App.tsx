import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import * as views from './view'
import {routerProps} from "./routers";
import {Route, Routes, Link} from "react-router-dom";
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "react-bootstrap";

interface MenuProps{
    href?: string,
    text: string
}

const App: React.FC = () => {
  return (
      <div>
          <div className="d-flex align-items-center"
               style={{
                   height: "15vh",
                   padding: "30px"
               }}
          >
              <h1 style={{ margin: 0, padding: 0}}>
                  Title
              </h1>
          </div>
          <hr style={{ margin: 0, padding: 0}}/>
          <div className="d-flex">
              <div
                  style={{
                      border: "1px solid black",
                      height: "85vh"
                  }}
              >
                  <Nav className="flex-column mt-3" variant="pills">
                      {routerProps.map((router)=>((
                          <NavItem style={{marginBottom:"20px"}}>
                              <NavLink href={router.path}>{router.menuTitle}</NavLink>
                          </NavItem>
                      )))}
                  </Nav>
              </div>
              <Routes>
                  {routerProps.map((router)=>((
                      <Route path={router.path} element={<router.view/>}/>
                  )))}
              </Routes>
          </div>
      </div>
  );
}

export default App;
