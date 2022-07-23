import React, { Fragment, useEffect, useState } from 'react'
import { Button, ButtonGroup, Col, Container, Form, Row } from 'react-bootstrap'



const type ={
  'start':0,
  'resume':2,
  'stop':1,
  'submit':3
}


const Assignment18 = () => {

  const [time, settime] = useState({hrs:0,mins:0,secs:0})

  const [status, setstatus] = useState(type.start)
  const [interval, setinterval] = useState()

  const [phase, setphase] = useState(0)

  let updatedS = time.secs, updatedM = time.mins, updatedH = time.hrs;
  
  const start = () =>{
    
    run()
    setstatus(type.stop)
    setinterval(setInterval(run,1000))
    setphase(1)
  }
  
  const run = () => {
    
    console.log(time);

    if(updatedS === 0){
      if(updatedM === 0){
        if(updatedH === 0){}
        else{
          updatedH--
          updatedM = 59
          updatedS = 59
        }
      }else{
        updatedM--
        updatedS = 59
      }  
    }else{
      updatedS--
    }

    console.log(`secs:${updatedS} mins:${updatedM} hrs:${updatedH}`)
    settime({secs:updatedS, mins:updatedM, hrs:updatedH});
  }

  const stop = () => {
    clearInterval(interval);
    setstatus(type.resume);
  };

  const reset = () => {
    clearInterval(interval);
    setstatus(type.start);
    settime({hrs:0,mins:0,secs:0})
    setphase(0)
  };

  const resume = () => start();


  useEffect(() => {

    if(time.hrs === 0 && time.mins === 0 && time.secs === 0 && phase === 1){
      clearInterval(interval)
      setTimeout(()=>setstatus(type.start),2000)
      setTimeout(()=>alert("Completed"),1000)
      setphase(0)
    }

  }, [time])
  

  return (
    <Fragment>
      <Container className='App-Box'>

        {
          status === 0 ?
          <FormData settime={settime} time={time}/>
          :
          <DisplayData time={time}/>
        }
        <TimerButtons status={status} reset={reset} resume={resume} stop={stop} start={start}/>
      </Container>
    </Fragment>
  )
}

export default Assignment18


const FormData = ({settime,time}) =>{

  const [validated, setValidated] = useState(false);

  return(
    <Fragment>
      <Form validated={validated}>
        <Row className='justify-content-md-center'>
            <Form.Group as={Col} md='auto'>
              <Form.Control
                type='number'
                placeholder='00'
                max={24}
                min={0}
                name="hrs"
                onChange={e=>settime({...time,hrs:parseInt((e.target.value)?e.target.value:0)})}
              />
            </Form.Group>
            <div className='vr'/>
            <Form.Group as={Col} md='auto'>
                <Form.Control
                  type='number'
                  placeholder='00'
                  max={60}
                  min={0}
                  name="mins"
                  onChange={e=>settime({...time,mins:parseInt((e.target.value)?e.target.value:0)})}
                />
              </Form.Group>
            <div className='vr'/>
            <Form.Group as={Col} md='auto'>
                <Form.Control
                  type='number'
                  placeholder='00'
                  max={60}
                  min={0}
                  name="secs"
                  onChange={e=>settime({...time,secs:parseInt((e.target.value)?e.target.value:0)})}
                />
              </Form.Group>
        </Row>
      </Form>
    </Fragment>
  )
}

const DisplayData = ({time}) =>{
  return(
    <Fragment>
      <Row className='justify-content-md-center timerBtnGrp'>
        <Col md="auto">
          <div className="timerBox">{(time.hrs >= 10)? time.hrs : "0"+ time.hrs}</div>
        </Col>
        <div className='vr'/>
        <Col md="auto">
          <div className="timerBox">{(time.mins >= 10)? time.mins : "0"+ time.mins}</div>
        </Col>
        <div className='vr'/>
        <Col md="auto">
          <div className="timerBox">{(time.secs >= 10)? time.secs : "0"+ time.secs}</div>
        </Col>
      </Row>
    </Fragment>
  )
}


const TimerButtons = ({status,reset,stop,start,resume}) => {
  return (
    <Fragment>
      <Row className='justify-content-md-center'>
        <Col md="auto" className='timerBtnGrp'>
          <ButtonGroup>
          {status === 0 && <Button className='timerBtn' variant="outline-secondary" onClick={start}>Start</Button>}
          {status === 1 && <Button className='timerBtn' variant="outline-secondary" onClick={stop}>Stop</Button>}
          {status === 2 && <Button className='timerBtn' variant="outline-secondary" onClick={resume}>Resume</Button>}
          <Button className='timerBtn' variant="outline-secondary" disabled={status === 0 ? true:false} onClick={reset}>Reset</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Fragment>
  )
}