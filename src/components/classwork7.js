import React, { Component } from 'react'

export default class Classwork7 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      date: new Date()
    }
  }

  render() {
    return (
      <div className='App-Box'>
        <StateToProps stp={this.state.date}/>
      </div>
    )
  }
}

class StateToProps extends Component {
  render() {
    return (
      <div>
        <h1>  State to Props: </h1>
        <h2> Current time: {this.props.stp.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

