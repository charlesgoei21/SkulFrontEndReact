import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap';
// import {LinkContainer} from "react-router-bootstrap";
import TableSiswa from "./Component/tables/tableSiswa";
import TableGuru from "./Component/tables/tableGuru";
import Homes from "./Component/home"
import NavBar from "./Component/navbar";
import Lefts from "./Component/leftNavbar"
import Rights from "./Component/rightNavbar"
import Cards from "./Component/card"
// import Login from "../src/Login";
// import Carousel from "./Component/Carousel";
// import Homes from "./Component/home";
import './App.css'; 
import {Form,  Container, Row,Col} from 'react-bootstrap';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
// import { link } from 'fs';
// import { traverse } from '@babel/core';
// import { homedir } from 'os';



function Home(){
  return<Homes/>
}

function ListView(){
  return<Cards/>
}
function noMatch(){
  return <h2>404, Not Found</h2>
}
function dataGuru(){
  return <TableGuru/>
}
function dataSiswa(){
  return <TableSiswa/>
}

class App extends Component {
  render(){
    const move ={
      position : 'relative',
      top : '70px'
    }
    
  return (
    <Form>
    <BrowserRouter>
    <Container>
    <NavBar/>
      <Row>
      <Col fixed="top">
      <Lefts/>
      </Col>
      <Col xs={6}>
        
       <main style={move}>
       <Switch>
            <Route path='/' exact component={Home}/>
             <Route path='/data/guru' exact component={dataGuru}/>
             <Route path='/data/siswa' exact component={dataSiswa}/>
             <Route path='/users' exact component={ListView}/>
             <Route component={noMatch}/>
       </Switch>
     </main>
     </Col>
     <Col>
      <Rights/>
      </Col>
     
     </Row>
     </Container>
     
     </BrowserRouter>
     </Form>
  );
  }
}

export default App;
