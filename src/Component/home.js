import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {  Carousel, Container } from 'react-bootstrap';

import logo from './1.jpg';
// import { relative } from 'path';
// import Cards from './card';
// import styles from './navbar.css';

class Homes extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
      
    
      render() {
        const { index, direction } = this.state;
        const sizes={
          height : '200px',
          width : '500px',

        }
        const a ={
        
        }

        return (
          <Container style={a}>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            style ={sizes}
            
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={logo}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={logo}
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={logo}
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* <Cards/> */}
          </Container>
        );
      }
    }
export default Homes;