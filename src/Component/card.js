import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {  Button,  Card } from 'react-bootstrap';

import logo from './kepsek.png';
// import { relative } from 'path';
// import styles from './navbar.css';

class Cards extends Component{
    
    render() {
        const position ={
            // marginTop: '150px',
            width: '200px',
            marginBottom: '20px'
        }
        const photo ={
            width : '200px',
            height: '150px',
            borderRadius: '10px'
        }
        
        return (
            <Card style={position}>
            <Card.Img variant="top" src={logo} style={photo} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      }
    }
export default Cards;