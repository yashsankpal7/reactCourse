import React, { Component } from 'react'

export default class Classwork4 extends Component {

  constructor(props){
    super(props)
    this.state = {
      records:[
        {"id":101,"name":"Sharan","dept":"IT","designation":"Developer"},
        {"id":102,"name":"Karan","dept":"IT","designation":"Developer"},
        {"id":103,"name":"Naran","dept":"IT","designation":"Developer"},
        {"id":104,"name":"Paran","dept":"IT","designation":"Developer"},
        {"id":105,"name":"Taran","dept":"IT","designation":"Developer"},
      ]
    }
  }

  render() {
    return (
      <div className='App-Box'>
        <DisplayName/>
        <ul>
          {this.state.records.map(item=><DisplayData record={item}/>)}
        </ul>
      </div>
    )
  }
}



class DisplayName extends Component {


  render() {
    return (
      <h1 className='App-Head'> Employee Details</h1>
    )
  }
}


class DisplayData extends Component {


  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <td>{this.props.record.id}</td>
            <td>{this.props.record.name}</td>
            <td>{this.props.record.dept}</td>
            <td>{this.props.record.designation}</td>
          </tr>
        </table>
      </div>
    )
  }
}