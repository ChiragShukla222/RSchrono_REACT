import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../images/Logo.png";
import "./TopHeader.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import {Link,Outlet} from "react-router-dom"
import { useNavigate } from 'react-router-dom';import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const TopHeader = () => {
  const navigate = useNavigate()

  const myCart=()=>{
    navigate("/mycart");
  }
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [searchquery , setsearchquery]=useState("");
    const search=()=>{
      navigate(`/search/${searchquery}`);
    }
      console.log(searchquery);





  return (
    <>
    
      <Navbar expand="lg" className="bg-translucent" bg="dark" data-bs-theme="dark" >
      
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to ="home">Home</Nav.Link>
              <Nav.Link as={Link} to ="watches">Watches</Nav.Link>
              <NavDropdown title="Best Selling" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Gyro</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Planet Limited Series
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/custom">Custom</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" >
                About Us
              </Nav.Link>
            </Nav>
            {/* loggogogo */}
            <Navbar.Brand href="#"><img src={Logo} alt="" style={{width:"200px", marginRight:"390px"}}/></Navbar.Brand>
         
            <Nav>
            <Nav.Link href="#deets">
              <a href="#" onClick={handleShow}><IoSearch /></a>
          
            </Nav.Link>
            
            <Nav.Link href="#deets">
            <FaUser />

            </Nav.Link>
            <Nav.Link  href="#memes">
            <a href='#' onClick={myCart}>
            <FaShoppingCart />
            </a> 
            

{/* 
             {DataCount<=0?"": 
             <span style={{padding:"2px", borderRadius:"50%", marginLeft:"5px", border:"1px solid grey", backgroundColor:"lightblue"}}> {DataCount}</span> } */}
            
            </Nav.Link>
          </Nav>
 
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* modal */}
     

      <Modal show={show} onHide={handleClose} style={{marginTop:"100px"}}>
        <Modal.Header closeButton>
          <Modal.Title>Search BY:
            <input type="text"value={searchquery} onChange={(e)=>setsearchquery(e.target.value)} />
            <IoSearch onClick={search} style={{cursor:"pointer"}} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <a href="#planet series"style={{textDecoration:"none"}}>Planet Series</a>
            <br />
            <a href="#Best Selling"style={{textDecoration:"none"}}>Best Seller</a>
            <br />
            <a href="#customOptions"style={{textDecoration:"none"}}>Custom Options</a>       
   
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
      
    </>
  );
}

export default TopHeader;
