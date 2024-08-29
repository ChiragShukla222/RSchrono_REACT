import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import W1 from "../images/W1.webp"
import W4 from "../images/W4.webp"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./stylecard.css"

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
    <Carousel >
      <Carousel.Item>
        {/* first */}
        <img src="/src/images/W1.webp" alt="" style={{width:"100%" , height:"700px", objectFit:"cover" }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      {/* second */}
      <img src="/src/images/W4.webp" alt=""style={{width:"100%" , height:"700px", objectFit:"cover" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
 
        
    
    </Carousel>


    <div className="detailsfor_new">
        <h1>NEW 'Performante' Watches
          <br />
          Available NOW
        </h1>
        <p>Crafted with bold precision and power, this watch features a striking 5-spoke design and Gyro <br /> spinning face. With only 500 made, secure your exclusive timepiece before it’s too late!</p>
    </div>


  <div className="card-con">
      {/* cards */}
      <Card style={{ width: '18rem' , height:"25rem"}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <p>i mg</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>

  <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src="/src/images/W1.webp" alt="" style={{width:"100%" , height:"700px", objectFit:"cover" }}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/src/images/W1.webp" alt="" style={{width:"100%" , height:"700px", objectFit:"cover" }}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/src/images/W1.webp" alt="" style={{width:"100%" , height:"700px", objectFit:"cover" }}/>
       
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Home
