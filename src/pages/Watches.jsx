import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../addToCartSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Watches.css";
import Accordion from 'react-bootstrap/Accordion';
const Watches = () => {
  const [mydata, setMydata] = useState([]);
    const [proImage, setProImage] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
      const loadData = async () => {
          try {
              const api = "http://localhost:3000/products";
              const response = await axios.get(api);
              setMydata(response.data); // Fixed to set mydata instead of watchData
          } catch (error) {
              console.error("Error fetching data", error);
          }
      };

      loadData();
  }, []);

  const loadProductimage = async () => {
      try {
          const api = "http://localhost:3000/productimages";
          const response = await axios.get(api);
          setProImage(response.data);
      } catch (error) {
          console.error("Error fetching product images", error);
      }
  };

  useEffect(() => {
      loadProductimage();
  }, []);

  const addDataToCart = (id, name, price, image) => {
      dispatch(addToCart({
          id: id,
          name: name,
          price: price,
          image: image,
          qnty: 1
      }));
  };

  
      let sno =0
  const ans = mydata.map((key) => (
      sno = sno + 1,
      <Card style={{ width: '250px', marginTop: "20px", backgroundColor: "whitesmoke" }} key={key.id} >
          <Card.Img variant="top" src={key.image} />
          <Card.Body>
              <Card.Title> {key.name} </Card.Title>
              <h4 style={{ color: "blue", fontSize: "14px" }}> {key.category}</h4>
              <Card.Text>{key.description}</Card.Text>
              <h4 style={{ color: "red", fontSize: "16px" }}> Price : {key.price} </h4>
              <Button variant="secondary"
                  onClick={() => addDataToCart(key.id, key.name, key.price, key.image)}>
                  Add To Cart
              </Button>
          </Card.Body>
      </Card>
  ));


  return (
   <>
          <div className="homeimg">
            <h1 style={{color:"white",paddingTop:"525px",textAlign:"center",fontSize:"50px",fontWeight:"bold"}}>Limited Edition Performante Watches</h1>
              <p style={{color:"white",textAlign:"center"}}>Crafted with bold precision and power, this watch features a striking 5-spoke design and Gyro spinning face.
                <br />
                 With only 500 made, secure your exclusive timepiece before it’s too late!</p>
          </div>
          <div className="ans" style={{display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px", justifyContent: "space-evenly"}}>
               {ans}
          </div>
          <div className="rotatingtetx" style={{marginTop:"35px"}}>
      <marquee behavior="scroll" direction="left" style={{ fontSize: "80px" ,fontWeight:"500",color:"black"}}>
            LIMITED TO 500 WATCHES.&nbsp;&nbsp;&nbsp;&nbsp;LIMITED TO 500 WATCHES.
            &nbsp;&nbsp;&nbsp;&nbsp;LIMITED TO 500 WATCHES.
      </marquee>

    </div>
 


    <Container style={{marginTop:"50px"}}>
  <Row>
    <Col sm={5}>
      <img
        src="https://www.rschrono.com/cdn/shop/files/RSChrono-Urus-Red.jpg?v=1724329219&width=1000"
        alt=""
        style={{
          width: '100%',
          height: 'auto',
          
          borderRadius: '50px', // Rounded corners
          padding: '5px', // Space between border and image
        }}
      />
    </Col>
    <Col sm={6}>
      <img
        src="https://www.rschrono.com/cdn/shop/files/6.png?v=1724325285&width=1400"
        alt=""
        style={{
          width: '100%',
          height: 'auto',
          
          borderRadius: '50px',
          padding: '5px',
          
        }}
      />
      
    </Col>
  </Row>
  {/* <Row>
    <Col sm={4}>
    <img
        src="https://www.rschrono.com/cdn/shop/files/LAmborghini-Urus-Performante-Watch-Orange.png?v=1724326274&width=1000"
        alt=""
        style={{
          width: '100%',
          height: 'auto',
         
          borderRadius: '50px',
          padding: '5px',
        }}
      />
    </Col>
  </Row> */}
 
</Container>

<div className="questions">

          <h1 style={{fontSize:"40px",fontWeight:"bold",textAlign:"center",marginTop:"50px",marginBottom:"100px"}}>Have A Question ? We're Here To Help</h1>

          <div className="acc"style={{width:"80%",margin:"auto",marginBottom:"150px"}}>
          <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>why we use it#1</Accordion.Header>
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
              <Accordion.Header>why we #2</Accordion.Header>
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
              <Accordion.Header>why #3</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item> <Accordion.Item eventKey="1">
              <Accordion.Header>why this #4</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item> <Accordion.Item eventKey="1">
              <Accordion.Header>Need in market #5</Accordion.Header>
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
          </div>


      </div>
    

   
   </>
  )
}

export default Watches
