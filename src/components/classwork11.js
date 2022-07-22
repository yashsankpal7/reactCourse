import React, { Component } from 'react'

export default class Classwork11 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      date: new Date()
    }
  }

  updateTime(){
    this.setState({date:new Date()})
  }

  componentDidMount(){
    this.timerID = setInterval(()=>this.updateTime(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timerID)
  }

  render() {
    return (
      <div className='App-Box'>
        <h2> Current time : {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}
