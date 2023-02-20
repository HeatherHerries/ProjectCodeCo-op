import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Quotes from "../Assets/Images/SVGImages/QuotesIcon.svg"

export default function ReviewSlider() {
  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-50"
          src={Quotes}
          alt="First slide"
        />
        <Carousel.Caption>
          <p>"I have looked everywhere for a group just like this! Challenging projects that push me to learn and give me the real-world experience that potential employers need to see!”</p>

          <h3 className="name">Heather H</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-50"
          src={Quotes}
          alt="First slide"
        />
        <Carousel.Caption>
        <p>"I have looked everywhere for a group just like this! Challenging projects that push me to learn and give me the real-world experience that potential employers need to see!”</p>

        <h3 className="name">Heather H</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50"
          src={Quotes}
          alt="First slide"
        />
        <Carousel.Caption>
        <p>"I have looked everywhere for a group just like this! Challenging projects that push me to learn and give me the real-world experience that potential employers need to see!”</p>

        <h3 className="name">Heather H</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
