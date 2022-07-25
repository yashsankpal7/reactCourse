import React,  { useState } from 'react'
import { Container, Button, Form, Row ,Col ,InputGroup} from 'react-bootstrap';

const personalData = {
  name:'yash',
  password:'yash'
}

const Assignment21 = () => {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    let name = form[0].value
    let password = form[1].value
    console.log(form[0].value);

    setValidated(true);

    if(name === personalData.name && password === personalData.password){
      alert("True")
    }
  };

  return (
    <Container className="App-Box text-box-medium">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter valid username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-describedby="inputGroupPrepend"
                required
              />
            <Form.Control.Feedback type="invalid">
              Enter valid password
            </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button type="submit"  >Submit</Button>
          </Col>
        </Row>
    </Form>
  </Container>
  )
}

export default Assignment21