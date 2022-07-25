import React from 'react'
import { Container, Stack, Button } from 'react-bootstrap';
import { useState } from 'react';

const Assignment24 = () => {

  const [value, setvalue] = useState("");
  const [secondValue, setsecondValue] = useState("");
  const [operation, setoperation] = useState("")

  const handleClick = (val) =>{
    if(operation === ""){
      setvalue(String(parseInt(secondValue)))
      setsecondValue("0")
      setoperation(val)
    }else{
      let str;
      switch (operation) {
        case '+':
          str = parseInt(value)+parseInt(secondValue)
          break;
        case '-':
          str = parseInt(value)-parseInt(secondValue)
          break;
        case 'x':
          str = parseInt(value)*parseInt(secondValue)
          break;
        case '/':
          str = parseInt(value)/parseInt(secondValue)
          break;
        default:
          break;
      }
      setvalue(String(str))
      setsecondValue("0")
      setoperation(val)
    }
  }

  const setSecondValue = (val) => {
    setsecondValue(String(parseInt(secondValue+val)))
  }

  const delValue = () => {
    setsecondValue(String(parseInt(secondValue.slice(0,-1))))
  }

  const clearValue = () => {
    setsecondValue("0")
    setvalue("0")
    setoperation("")
  }

  const handleSubmit = () =>{
    let str;
    switch (operation) {
      case '+':
        str = parseInt(value)+parseInt(secondValue)
        break;
      case '-':
        str = parseInt(value)-parseInt(secondValue)
        break;
      case 'x':
        str = parseInt(value)*parseInt(secondValue)
        break;
      case '/':
        str = parseInt(value)/parseInt(secondValue)
        break;
      default:
        str = parseInt(secondValue)
        break;
    }
    setvalue(String(str))
    setsecondValue("0")
    setoperation("")
  }

  return (
    <Container className='App-Box'>
      <Stack className="col-md-5 mx-auto" gap={3}>
        <DisplayData secondValue={secondValue} value={value}/>
        <Buttons 
          setSecondValue={setSecondValue}
          del={delValue}  
          clear={clearValue}
          setoperation={handleClick}
          handleSubmit={handleSubmit}
        />
      </Stack>
    </Container>
  )
}

export default Assignment24


const DisplayData = ({secondValue,value}) => {
  return (
    <>
      <div className="timerBox">{secondValue || 0} <br/> {value || 0}</div>
    </>
  )
}

const Buttons = ({setSecondValue,del,clear,setoperation,handleSubmit}) => {
  return (
    <>
      <Stack direction="horizontal" gap={1}>
        <Button onClick={()=>clear()} variant="warning" className='CalBtn'>C</Button>
        <Button onClick variant="warning" className='CalBtn'>%</Button>
        <Button onClick={()=>del()} variant="warning" className='CalBtn'>DEL</Button>
        <Button onClick={()=>setoperation('/')} variant="dark" className='CalBtn'>/</Button>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <Button onClick={()=>setSecondValue('7')} variant="info" className='CalBtn'>7</Button>
        <Button onClick={()=>setSecondValue('8')} variant="info" className='CalBtn'>8</Button>
        <Button onClick={()=>setSecondValue('9')} variant="info" className='CalBtn'>9</Button>
        <Button onClick={()=>setoperation('x')} variant="dark" className='CalBtn'>x</Button>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <Button onClick={()=>setSecondValue('4')} variant="info" className='CalBtn'>4</Button>
        <Button onClick={()=>setSecondValue('5')} variant="info" className='CalBtn'>5</Button>
        <Button onClick={()=>setSecondValue('6')} variant="info" className='CalBtn'>6</Button>
        <Button onClick={()=>setoperation('-')} variant="dark" className='CalBtn'>-</Button>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <Button onClick={()=>setSecondValue('1')} variant="info" className='CalBtn'>1</Button>
        <Button onClick={()=>setSecondValue('2')} variant="info" className='CalBtn'>2</Button>
        <Button onClick={()=>setSecondValue('3')} variant="info" className='CalBtn'>3</Button>
        <Button onClick={()=>setoperation('+')} variant="dark" className='CalBtn'>+</Button>
      </Stack>
      <Stack direction="horizontal" gap={1}>
        <Button onClick={()=>setSecondValue('00')} variant="info" className='CalBtn'>00</Button>
        <Button onClick={()=>setSecondValue('0')} variant="info" className='CalBtn'>0</Button>
        <Button onClick={()=>setSecondValue('.')} variant="info" className='CalBtn'>.</Button>
        <Button onClick={()=>handleSubmit()} variant="success" className='CalBtn'>=</Button>
      </Stack>
    </>
  )
}
