import React , { useState }from 'react'
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';

const Assignment23 = () => {


  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    console.log(form[8].value);

    setValidated(true);

    let data = {
      FirstName : form[0].value,
      LastName : form[1].value,
      Username : form[2].value,
      Filename : form[3].value,
      Password : form[4].value,
      City : form[5].value,
      Radio : form[6].value,
      Zip : form[7].value,
      CheckBox : form[8].value
    }
    alert(` ${data.FirstName} ${data.LastName} ${data.Username} ${data.Filename} ${data.Password} ${data.City} ${data.Radio} ${data.Zip} ${data.CheckBox}`)

  };

  return ( 
    <Container className="App-Box text-box-medium">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>File</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="file"
              placeholder="file"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a file.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="password"
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
        <Form.Check
          required
          type="switch"
          label="Radio"
        />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="number" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          value="yash"
          on
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </Container>
  )
}

export default Assignment23
 