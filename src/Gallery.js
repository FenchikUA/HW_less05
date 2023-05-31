import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';
import img11 from './img/11.jpg';
import './fix.css';
import React from 'react'

const Gallery = () => {
  return (
    <Container>
    <Row className='fix'>
      <Col><img src={img3} alt=''/></Col>
      <Col><img src={img4} alt=''/></Col>
      <Col><img src={img5} alt=''/></Col>
    </Row>
    <Row className='fix'>
      <Col><img src={img6} alt=''/></Col>
      <Col><img src={img7} alt=''/></Col>
      <Col><img src={img8} alt=''/></Col>
    </Row>
    <Row className='fix'>
      <Col><img src={img9} alt=''/></Col>
      <Col><img src={img10} alt=''/></Col>
      <Col><img src={img11} alt=''/></Col>
    </Row>
  </Container>
  )
}

export default Gallery
