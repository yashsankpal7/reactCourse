import React, { Component } from 'react'

export default class Classwork10 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      newDate:new Date()
    }
  }

  forceUpdateState(){
    this.setState({newDate: new Date()})
    this.forceUpdate()
  }

  render() {
    return (
      <div className='App-Box'>
        <h2> The current time is {this.state.newDate.toLocaleTimeString()}</h2>
        <button onClick={this.forceUpdateState}>Update Current Time</button>
      </div>
    )
  }

  componentDidMount(){
    console.log("Component did mount");
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }
}
