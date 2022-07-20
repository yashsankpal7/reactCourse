import React, { Component } from 'react'

export default class Classwork6 extends Component {
  render() {
    return (
      <div className='App-Box'>
        <h1>Hi, I'm {this.props.name}</h1>
        <h2>I work as {this.props.designation} </h2>
      </div>
    )
  }

}

Classwork6.defaultProps={
  name : "Yash",
  designation : "Trainee analyst"
}