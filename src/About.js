import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import map from './img/map.jpg';
import './fix.css';
import React, { useState } from 'react'

const About = () => {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  return (
    <Container className='fix-two'>
      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowA} className="mb-2">
            Дізнайся нашу адресу
          </Button>
          <Toast show={!showA} onClose={toggleShowA}>
            <Toast.Header>
              <strong className="me-auto">Київ</strong>
              <small>Якась вулиця</small>
            </Toast.Header>
            <img src={map} alt=''/>
            <Toast.Body>Ми десь тут</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  )
}

export default About
