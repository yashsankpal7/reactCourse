import React, { Component, Fragment } from 'react'

export default class Classwork3 extends Component {
  render() {
    return (
      <Fragment>
        <div className='App-Box'>
          <First/>
          <br/>
          <br/>
          <Second/>
        </div>
      </Fragment>
    )
  }
}


class First extends Component {
  render() {
    return (
      <h1 className="App-Head">Hi From first component</h1>
    )
  }
}



class Second extends Component {
  render() {
    return (
      <h1 className="App-Head">Hi From second component</h1>
    )
  }
}
