import React , { useState }from 'react'
import { Container, Form, Row , Col,InputGroup,Button } from 'react-bootstrap';

const Assignment22 = () => {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;


    setValidated(true);

    let data = {
      FirstName : form[0].value,
      LastName : form[1].value,
      Username : form[2].value,
      Password : form[3].value,
    }
    alert(` First Name: ${data.FirstName} \n Last Name: ${data.LastName} \n Username: ${data.Username} \n Password: ${data.Password}`)

  };


  return (
    <Container className="App-Box text-box-medium">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>First Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="First Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter valid name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Label>Last Name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Last Name"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter valid name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
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
            <Form.Label>City</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="City"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Enter valid city name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

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

export default Assignment22