import React, { Component } from 'react'

export default class Classwork9 extends Component {

  updateTime(){
    this.forceUpdate()
  }
  render() {
    return (
      <div className='App-Box'>
        <h2>Current time is {new Date().toLocaleTimeString()}</h2>
        <button onClick={()=>this.updateTime()}>UpdateTime</button>
      </div>
    )
  }
}
