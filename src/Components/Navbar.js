import { Button, Navbar, Nav, Container, Modal, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React, {useState} from 'react'

const Styles = styled.div`
a,.navbar-brand,.navbar-nav,.nav-link{
  color: white;
  &:hover{
    color: red;
  } 
}
`
const NavbarOne = () => {
  const [show, setShow] = useState(false);
  const hendleClose = () => setShow(false);
  const hendleShow = () => setShow (true);
  return (
    <div>
      <Styles>
        <Navbar expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>My Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Home</Link></Nav.Link>
              <Nav.Link><Link to="/gallery">Gallery</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
            </Nav>
            <Nav>
              <Button variant='primary' onClick={hendleShow}>Log In</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
      <Modal show={show} onHide={hendleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Hello!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type='email'/>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password'/>
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Control type='checkbox' label='Click Me'/>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default NavbarOne
