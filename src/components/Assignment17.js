import React,{Fragment, useState} from 'react'
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap'


const type ={
  'start':0,
  'resume':2,
  'stop':1
}

const Assignment17 = () => {

  const [status, setstatus] = useState(type.start)
  const [time, settime] = useState({ms:0,s:0,m:0,h:0})
  const [interval, setinterval] = useState()


  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const start = () =>{
    run()
    setstatus(type.stop)
    setinterval(setInterval(run,10))
  }

  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return settime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  }

  const stop = () => {
    clearInterval(interval);
    setstatus(type.resume);
  };

  const reset = () => {
    clearInterval(interval);
    setstatus(type.start);
    settime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    // <div className='App-Box'>
      <Container className='App-Box'>
        {/* Display */}
        <Row className='justify-content-md-center'>
          <DisplayData time={time}/>
        </Row>
        {/* Buttons */}
        <Row className='justify-content-md-center'>
          <TimerButtons status={status} reset={reset} resume={resume} stop={stop} start={start}/>
        </Row>
      </Container>
    // </div>
  )
}

export default Assignment17


const DisplayData = ({time}) =>{
  return(
    <Fragment>
      <Col md="auto">
        <div className="timerBox">{(time.m >= 10)? time.m : "0"+ time.m}</div>
      </Col>
      <div className='vr'/>
      <Col md="auto">
        <div className="timerBox">{(time.s >= 10)? time.s : "0"+ time.s}</div>
      </Col>
      <div className='vr'/>
      <Col md="auto">
        <div className="timerBox">{(time.ms >= 10)? time.ms : "0"+ time.ms}</div>
      </Col>
    </Fragment>
  )
}


const TimerButtons = ({status,reset,stop,start,resume}) => {
  return (
    <Fragment>
      <Col md="auto" className='timerBtnGrp'>
        <ButtonGroup>
          {status === 0 && <Button className='timerBtn' variant="outline-secondary" onClick={start}>Start</Button>}
          {status === 1 && <Button className='timerBtn' variant="outline-secondary" onClick={stop}>Stop</Button>}
          {status === 2 && <Button className='timerBtn' variant="outline-secondary" onClick={resume}>Resume</Button>}
          <Button className='timerBtn' variant="outline-secondary" disabled={status === 0 ? true : false}  onClick={reset}>Reset</Button>
        </ButtonGroup>
      </Col>
    </Fragment>
  )
}
