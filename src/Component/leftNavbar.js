import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { ListGroup } from 'react-bootstrap';


// import { relative } from 'path';
// import styles from './navbar.css';

class Lefts extends Component{
    
    render() {
       
        const move2 ={
            position : 'fixed',
            top : '70px'
          }
        return (
            <ListGroup style={move2}>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        );
      }
    }
export default Lefts;