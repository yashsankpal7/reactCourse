import React, { Component } from 'react'

export default class Assignment13 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      cnt:1
    }
    this.onIncrement = this.onIncrement.bind(this)
  }

  onIncrement(){
    this.setState({
      cnt:this.state.cnt+1
    });
  }

  onDecrement(){
    this.setState({
      cnt:this.state.cnt-1
    });
  }

  render() {
    return (
      <div className='App-Box'>
        {this.state.cnt}
        <br/>
        <button onClick={()=>this.onIncrement()}>Increment</button>
        <button onClick={()=>this.onDecrement()}>Decrement</button>
      </div>
    )
  }
}
