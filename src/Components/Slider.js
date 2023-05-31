import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import { Carousel } from 'react-bootstrap'
import React from 'react'

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item style={{'height': '600px'}}>
          <img className='d-block w-100' src={img1} alt='img1' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '600px'}}>
          <img className='d-block w-100' src={img2} alt='img2' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Slider
