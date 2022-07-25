import React, { Fragment, useState ,useRef} from 'react'
import {Stack,Row,Col,Toast,Tooltip, Tabs,Tab,Table,Spinner, ProgressBar,OverlayTrigger,Popover,Placeholder,Pagination,Overlay,Offcanvas,Navbar,NavDropdown,Accordion, Alert, Badge, Breadcrumb, Button, ButtonGroup, Card, Carousel, CloseButton, Container, Dropdown, Figure, Image, ListGroup, Modal, Nav } from 'react-bootstrap'

const Assignment20 = () => {
  return (
    <Container className="App-Box">
      <Stack garp={3}>
      1
      <Alert_/>
      2
      <Accordion_/>
      3
      <Badge_/>
      4
      <Breadcrumb_/>
      5
      <Buttons_/>
      6
      <ButtonGroup_/>
      7
      <Cards_/>
      8
      <Carousel_/>
      9
      <CloseButton_/>
      10
      <Dropdown_/>
      11
      <Figures_/>
      12
      <Images_/>
      13
      <ListGroup_/>
      14
      <Modal_/>
      15
      <Navs_/>
      16
      <Navbar_/>
      17
      <OffCanvas_/>
      18
      <Overlays_/>
      20
      <Pagination_/>
      21
      <Placeholder_/>
      22
      <Popovers_/>
      23
      <Progress_/>
      24
      <Spinners_/>
      25
      <Table_/>
      26
      <Tabs_/>
      27
      <Tooltips_/>
      28
      <Toasts_/>
      </Stack>
    </Container>
  )
}

export default Assignment20

const Alert_ = ()=>{
  return(
    <Fragment>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </Fragment>
  )
}

const Accordion_ = ()=>{
  return(
    <Fragment>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>    
    </Fragment>
  )
}

const Badge_ = ()=>{
  return(
    <Fragment>
      <Badge bg="primary">Primary</Badge>{' '}
      <Badge bg="secondary">Secondary</Badge>{' '}
      <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
      <Badge bg="warning" text="dark">
        Warning
      </Badge>{' '}
      <Badge bg="info">Info</Badge>{' '}
      <Badge bg="light" text="dark">
        Light
      </Badge>{' '}
      <Badge bg="dark">Dark</Badge>
    </Fragment>
  )
}

const Breadcrumb_ = ()=>{
  return(
    <Fragment>
      <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    </Fragment>
  )
}

const Buttons_ = ()=>{
  return(
    <Fragment>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>    
    </Fragment>
  )
}

const ButtonGroup_ = ()=>{
  return(
    <Fragment>
      <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>     
    </Fragment>
  )
}

const Cards_ = ()=>{
  return(
    <Fragment>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Fragment>
  )
}

const Carousel_ = ()=>{
  return(
    <Fragment>
      <Carousel fade>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                // src={require()}
                src={require("../shot-stash-red-stock-graph-chart.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-turntable-sat-in-a-store-window.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-vintage-desk-typewriter-man-hands-1.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../shot-stash-hands-holding-money-aflame.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={require("../pencils-rainbow.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
    </Fragment>
  )
}

const CloseButton_ = ()=>{
  return(
    <Fragment>
      <CloseButton disabled/>
    </Fragment>
  )
}

const Dropdown_ = ()=>{
  return(
    <Fragment>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Fragment>
  )
}

const Figures_ = ()=>{
  return(
    <Fragment>
          <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={require("../shot-stash-hands-holding-money-aflame.jpg")}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
    </Fragment>
  )
}

const Images_ = ()=>{
  return(
    <Fragment>
      <Image rounded src={require("../shot-stash-hands-holding-money-aflame.jpg")}/>
    </Fragment>
  )
}

const ListGroup_ = ()=>{
  return(
    <Fragment>
          <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </Fragment>
  )
}

const Modal_ = ()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return(
    <Fragment>
            <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  )
}

const Navs_ = ()=>{
  return(
    <Fragment>
      <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Fragment>
  )
}

const Navbar_ = ()=>{
  return(
    <Fragment>
          <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

const OffCanvas_ = ()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  )
}

const Overlays_ = ()=>{

  const [show, setShow] = useState(false);
  const target = useRef(null);
  return(
    <Fragment>
      <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </Fragment>
  )
}

const Pagination_ = ()=>{
  return(
    <Fragment>
      <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
    </Fragment>
  )
}

const Placeholder_ = ()=>{
  return(
    <Fragment>
      <Placeholder xs={6} />
      <Placeholder className="w-75" /> <Placeholder style={{ width: '25%' }} />
    </Fragment>
  )
}


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);
const Popovers_ = ()=>{
  return(
    <Fragment>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
    </Fragment>
  )
}

const Progress_ = ()=>{
  return(
    <Fragment>
      <ProgressBar animated now={45} />

    </Fragment>
  )
}


const Spinners_=()=>{
  return(
    <Fragment>
          <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </Fragment>
  )
}


const Table_ = ()=>{
  return(
    <Fragment>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Fragment>
  )
}

const Tabs_ = ()=>{
  return(
    <Fragment>
          <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Take all my loves, my love, yea take them all; What hast thou then more than thou hadst before? No love, my love, that thou mayst true love call; All mine was thine, before thou hadst this more. Then, if for my love, thou my love receivest, I cannot blame thee, for my love thou usest; But yet be blam'd, if thou thy self deceivest By wilful taste of what thyself refusest. I do forgive thy robbery, gentle thief, Although thou steal thee all my poverty:
      </Tab>
    </Tabs>
    </Fragment>
  )
}

const Tooltips_ = ()=>{
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return(
    <Fragment>
            <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </Fragment>
  )
}

const Toasts_ = ()=>{
  const [show, setShow] = useState(false);
  return(
    <Fragment>
          <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>
    </Row>
    </Fragment>
  )
}

// const Alert_ = ()=>{
//   return(
//     <Fragment>
      
//     </Fragment>
//   )
// }