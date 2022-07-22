import React, { Component } from 'react'

export default class Classwork8 extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      name:"yash"
    }

    
  }

  updateState(){
    this.setState({name:"Yash Sankpal"})
  }

  render() {
    return (
      <div className='App-Box'>
        <h2> My name is : {this.state.name}</h2>
        <button onClick={()=>this.updateState()}> Change State</button>
      </div>
    )
  }
}
