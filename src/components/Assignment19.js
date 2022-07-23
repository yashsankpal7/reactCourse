import React, { Fragment, useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

const Assignment19 = () => {
  return (
    <Fragment>
      <Container className='App-Box Clock-Box'>
        <Clock/>
      </Container>
    </Fragment>
  )
}

export default Assignment19


const Clock = () => {

  const [time, settime] = useState(new Date())

  const [interval, setinterval] = useState()

  useEffect(() => {
    
    setinterval(setInterval(()=>{settime(new Date())}, 1000))

    return()=>{
      clearInterval(interval)
    }
  }, [])
      

  return (
    <Fragment>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          <div className='clock'>
            <div className="hour_hand"
              style={{transform : `rotateZ(${time.getHours() *30}deg)`}}>
            </div>
            
            <div className="min_hand"
              style={{transform : `rotateZ(${time.getMinutes() *6}deg)`}}>
            </div>
            
            <div className="sec_hand"
              style={{transform : `rotateZ(${time.getSeconds() *6}deg)`}}>
            </div>

            <span className="twelve">12</span>
            <span className="one">1</span>
            <span className="two">2</span>
            <span className="three">3</span>
            <span className="four">4</span>
            <span className="five">5</span>
            <span className="six">6</span>
            <span className="seven">7</span>
            <span className="eight">8</span>
            <span className="nine">9</span>
            <span className="ten">10</span>
            <span className="eleven">11</span>
          </div>
        </Col>
      </Row>
    </Fragment>
  )
}
