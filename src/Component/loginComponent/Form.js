import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import { Form, Button, ButtonToolbar, Container } from 'react-bootstrap';
// import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
// import App from '../../App'

function login(){
  
}
class formLogin extends Component{
    render(){
        return(
            <Container className="mt-5">
            <Form>
            <Form.Group controlId="formBasicNIP">
              <Form.Label>NIP</Form.Label>
              <Form.Control type="text" placeholder="Enter NIP" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
          
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicChecbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <ButtonToolbar>
            <Button variant="primary" type="submit" href="/home" block>Login</Button>
            <Button variant="secondary" type="submit" href="/signup" block> Sign Up</Button>
            </ButtonToolbar>
          </Form>  
          </Container>
        );
    }
}

export default formLogin;
