import React, { Component } from 'react'

export default class Assignment12 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      personalData:{
        name:"Yash",
        role:"Trainee Analyst",
        location:"Mumbai"
      }
    }
  }
  render() {
    return (
      <div className='App-Box'>
        <tr>
          <td>Name: </td><td>&nbsp;{this.state.personalData.name}</td>
        </tr>
        <tr>
          <td>Role: </td><td>&nbsp;{this.state.personalData.role}</td>
        </tr>
        <tr>
          <td>Location: </td><td>&nbsp;{this.state.personalData.location}</td>
        </tr>
      </div>
    )
  }
}
