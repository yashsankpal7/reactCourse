import React, { Component } from 'react'

import Josh from "../shot-stash-hands-holding-money-aflame.jpg"
import Stash from "../shot-stash-turntable-sat-in-a-store-window.jpg"

export default class Assignment16 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      image : num[0],
      nm: 0
    }
  }

  updateImage(){

    let tmp = (this.state.nm + 1 ) % 2
    this.setState({
      image:num[tmp],
      nm:tmp
    })
  }

  componentDidMount(){
    this.timer = setInterval(()=>this.updateImage(),3000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className='App-Box'>
        <img src={this.state.image} alt="" height={600} width={800}/>
      </div>
    )
  }
}





const num = {
  0 : Josh,
  1 : Stash
}

