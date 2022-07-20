import React, { Component } from 'react'

export default class Classwork5 extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      displayBio:true
    }
  }
  render() {

    const bio = this.state.displayBio ? (
      <div>
        <h2> React Lessons</h2>
      </div>
    ):null

    return (
      <div className='App-Box'>
        <h1> Welcome From Yash</h1>
        {bio}
      </div>
    )
  }
}
