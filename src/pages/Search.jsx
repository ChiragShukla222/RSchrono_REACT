import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../addToCartSlice";

const Search = () => {
    const { txtdata } = useParams();
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

    const filteredData = mydata.filter((key) => key.name.toLowerCase().includes(txtdata.toLowerCase()));
        let sno =0
    const ans = filteredData.map((key) => (
        sno = sno + 1,
        <Card style={{ width: '250px', marginTop: "20px" }} key={key.id}>
            <Card.Img variant="top" src={key.image} />
            <Card.Body>
                <Card.Title> {key.name} </Card.Title>
                <h4 style={{ color: "blue", fontSize: "14px" }}> {key.category}</h4>
                <Card.Text>{key.description}</Card.Text>
                <h4 style={{ color: "red", fontSize: "16px" }}> Price : {key.price} </h4>
                <Button variant="primary"
                    onClick={() => addDataToCart(key.id, key.name, key.price, key.image)}>
                    Add To Cart
                </Button>
            </Card.Body>
        </Card>
    ));

    return (
        <>
            <div id="proHeading">
                <h1 style={{textAlign:"center",marginTop:"20px"}}> Watches Found :  &nbsp; {sno} </h1>
            </div>
            <div id="homeProduct">
                {ans}
            </div>
        </>
    );
};

export default Search;
