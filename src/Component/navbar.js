import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { Navbar, Nav, NavDropdown, Container, Form,FormControl,Col, Image } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

import logo from './1.png';
// import { relative } from 'path';

// import styles from './navbar.css';

class NavBar extends Component{
    render(){
        const warnacuy ={
            background : '#4267B2',
            height : '45px'
        }
        const cariup ={
            height : '30px',
            width : '400px',
            borderRadius : '2px',
            left : '10px'
        }
        const logos ={
            height : '30px',
            width : '30px',
            background : '#FFFFFF',
            marginRight : '10px'
        }

        
        return(
            
            <Navbar style={warnacuy} variant="dark" className="mb-5" expand="md" fixed="top"  size="sm">
            <Container>
            <Col xs="6">
            <Form inline >
                <Image src={logo} rounded style={logos} />
                <FormControl style={cariup} type="text" placeholder="cari" className="mr-sm-2" />
            </Form>
            </Col>
            <Col xs="6">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/"><Nav.Link className="mr-1">Home</Nav.Link></LinkContainer>
                
                <LinkContainer to="/users"><Nav.Link className="mr-1">User</Nav.Link></LinkContainer>
                <NavDropdown id="basic-nav-dropdown">
                    <LinkContainer to="/data/guru"><NavDropdown.Item>Guru</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/data/siswa"><NavDropdown.Item>Siswa</NavDropdown.Item></LinkContainer>
                    <LinkContainer to="/Absen/siswa"><NavDropdown.Item>Absen</NavDropdown.Item></LinkContainer>
                </NavDropdown>
                </Nav>
    
            </Navbar.Collapse>
            </Col>
            </Container>
            </Navbar>
            
        );
    }
}
export default NavBar;