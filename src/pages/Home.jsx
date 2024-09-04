import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import "./stylecard.css";

import { useDispatch } from 'react-redux';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [watchData, setWatchData] = useState([]);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
   // to get the data from the products imagae loadProductimage
   const[proImage , setProImage] = useState([])
// ---------------------------------------
   
  useEffect(() => {
    const loadData = async () => {
      try {
        const api = "http://localhost:3000/products";
        const response = await axios.get(api);
        setWatchData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    loadData();
  }, []);

// to laod the product image
  const loadProductimage=async()=>{
    try {
      const api = "http://localhost:3000/productimages";
      const response = await axios.get(api);
      setProImage(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
// for the dispatch of add to cart data from the addtocartslice




  useEffect(()=>{

    loadProductimage()
  },[])



const productRender=()=>{

  const slides = [];
  for (let i = 0; i < proImage.length; i++) {
    const cards = proImage.slice(i,i+1).map((item, idx) => (

      <Card key={idx} className="carousel-card" style={{ width: '22rem' ,height:"auto"}}>
        <Card.Img variant="top" src={item.image || "https://via.placeholder.com/150"} />
       
          
       
      </Card>
    ));
    slides.push(
      <Carousel.Item key={i} style={{ minHeight: '500px' }} className="json-carousel" >
        <div className="d-flex justify-content-center">
          {cards}
        </div>
       
      </Carousel.Item>
    );
  }
  return slides;
  
            
            
            
            
              
}



  const renderCarouselItems = () => {
    // Group items into slides of 4 cards per slide
    const slides = [];
    for (let i = 0; i < watchData.length; i += 4) {
      const cards = watchData.slice(i, i + 4).map((item, idx) => (

        <Card key={idx} className="carousel-card" style={{ width: '22rem' ,height:"auto"}}>
          <Card.Img variant="top" src={item.image || "https://via.placeholder.com/150"} />
          <Card.Body style={{textAlign:"center"}}>
            <Card.Title>{item.name || "Card Title"}</Card.Title>
            <Card.Text>{item.category|| "Some quick example text to build on the card title and make up the bulk of the card's content."}</Card.Text>
            <Card.Text>RS.{item.price|| "price."}</Card.Text>
            <Button variant="secondary" style={{borderRadius:"1 rem",width:"110px"}} onClick={()=>{addDataToCart(item.id, item.name, item.category, item.price, item.image)}}>Add to cart</Button>
          </Card.Body>
        </Card>
      ));
      slides.push(
        <Carousel.Item key={i} style={{ minHeight: '500px' }} className="json-carousel" setInterval={1000} data-bs-theme="dark">
          <div className="d-flex justify-content-center">
            {cards}
          </div>
          <Carousel.Caption>
            {/* <h3>Slide {i / 4 + 1}</h3> */}
            {/* <p style={{ color: 'black' }}>{i / 4 + 1}</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
    return slides;
  };

  return (
    <>
      <Carousel activeIndex={index}  onSelect={handleSelect} data-bs-theme="dark"  setInterval={100}>
        <Carousel.Item>
          <img src="/src/images/W1.webp" alt="First slide" style={{ width: "100%", height: "700px", objectFit: "cover" }} />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/src/images/W4.webp" alt="Second slide" style={{ width: "100%", height: "700px", objectFit: "cover" }} />
        </Carousel.Item>
      </Carousel>

      <div className="detailsfor_new">
        <h1 style={{marginTop:"20px",}}>NEW 'Performante' Watches <br /> Available NOW</h1>
        <p style={{marginTop:"30px",marginBottom:"60px",color:"gray"}}>Crafted with bold precision and power, this watch features a striking 5-spoke design and Gyro <br />spinning face. With only 500 made, secure your exclusive timepiece before it’s too late!</p>
      </div>
       
      
      <div className="dvi">
        <Carousel>
          {renderCarouselItems()}
        </Carousel>
      </div>



     
            {/* -----------------------------------------end of crousel------------------------------------- */}

                      {/* for limtied etxtdt */}

    <div className="rotatingtetx" style={{marginTop:"35px"}}>
      <marquee behavior="scroll" direction="left" style={{ fontSize: "80px" ,fontWeight:"500",color:"black"}}>
            LIMITED TO 500 WATCHES.&nbsp;&nbsp;&nbsp;&nbsp;LIMITED TO 500 WATCHES.
            &nbsp;&nbsp;&nbsp;&nbsp;LIMITED TO 500 WATCHES.
      </marquee>

    </div>
      

        {/* for the single crousel inside an product image */}
              <div className="prodetails_home"style={{marginTop:"20px"}}>
                  <div className="sideproductimage"style={{width:"500px"}} >


                                          <Carousel className="json-carousel">
                              {proImage.map((item, idx) => (
                                <Carousel.Item key={idx} style={{ minHeight: '300px'}} data-bs-theme="dark">
                                  <div className="d-flex justify-content-center">
                                    <Card className="carousel-card" style={{ width: '22rem', height: 'auto' }}>
                                      <Card.Img variant="top" src={item.image || "https://via.placeholder.com/150"} />
                                    </Card>
                                  </div>
                                </Carousel.Item>
                              ))}
                            </Carousel>
               
                  </div>

                  <div className="protext_blackwatch">
                                    <h1>  Performante Gyro</h1>
                                      <p style={{marginBottom:"10px"}}>RS. 7699</p>
                                      <p style={{fontSize:"15px"}}>Bold 5-spoke wheel design inspired by the Urus Performante, a powerful fusion of cutting-edge engineering and luxury. Precision-driven chronograph that mirrors RS Chrono's dedication to high-performance timepieces. Crafted with high-resistance materials, this watch embodies both strength and style.
                                      </p>
                                      <h2>ONLY AVAILABLE AT RSCHRONO.</h2>
                                    
                  </div>



                </div> 
       



    </>
  );
};


export default Home;
