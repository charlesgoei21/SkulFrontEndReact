import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';
// import formsignUp from './Component/loginComponent/signUp';
import Form from './Component/loginComponent/Form';
import App from './App';
import { directive } from '@babel/types';

function signup(){
    return <formsignUp/>
}
function app(){
    return <App/>
}
function lgn(){
    return<div>
        <Container className="mt-5" variant="primary">
            <Row>
                <Col></Col>
                <Col xs={5}><h1 >Welcome To School</h1></Col>
                <Col></Col>
            </Row>
                
            </Container>
            <Form/>
            </div>
}



class Forms extends Component{
    render(){
        return(
            <BrowserRouter>
            
            <main>
       <Switch>
             <Route path='/home' exact component={app}/>
             <Route path='/' exact component={lgn}/>
             <Route path='/signup' exact component={signup}/>
       </Switch>
     </main>
        </BrowserRouter>
        )
    }
}

export default Forms;
