import React, { Component } from 'react'
import { Button, Carousel } from 'react-bootstrap'
export default class Classwork12 extends Component {


  display(){
    console.log('Button clicked!!');
  }

  render() {
    return (
      <div className='App-Box'>
        <a href='https://react-bootstrap.github.io/getting-started/introduction/'> React Bootstrap</a>
        
        <br/>

        <Button onClick={this.display}  variant="primary">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="secondary">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="success">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="warning">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="danger">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="light">Login</Button> &nbsp;
        <Button onClick={this.display}  variant="link">Login</Button> &nbsp;


        <br/>
        <br/>

        <div className='App-Carousel'>
          <Carousel fade>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                // src={require()}
                src={require("../shot-stash-red-stock-graph-chart.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-turntable-sat-in-a-store-window.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-vintage-desk-typewriter-man-hands-1.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-hands-holding-money-aflame.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../pencils-rainbow.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
  }
}
