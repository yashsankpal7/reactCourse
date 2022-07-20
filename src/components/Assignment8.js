import React, { Component } from 'react'

export default class Assignment8 extends Component {

  constructor(props){
    super(props)
    this.state = {
      records:[
        {"id":101,"name":"Sharan","dept":"IT","designation":"Analyst"},
        {"id":102,"name":"Karan","dept":"Elex","designation":"Developer"},
        {"id":103,"name":"Naran","dept":"Prod","designation":"Technician"},
        {"id":104,"name":"Paran","dept":"CS","designation":"Developer"},
        {"id":105,"name":"Taran","dept":"IT","designation":"Developer"},
      ]
    }
  }

  render() {
    return (
      <div className='App-Box'>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
          </tr>
          {
            this.state.records.map(item=>{
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.dept}</td>
                  <td>{item.designation}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}
