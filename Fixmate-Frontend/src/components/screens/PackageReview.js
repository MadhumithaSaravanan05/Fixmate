import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import star from "../assets/star.png"
const PackageReview = () => {
  let id = localStorage.getItem('scId');
  const [data,setData]= useState([

  ]);

    const getAllRatings=()=>{
        axiosObject.get(`/getPackageRating/${id}`).then(
            (response)=>{
              console.log("Ratings fetched");
              setData(response.data);
              localStorage.removeItem("scId");
            },(error)=>{
              console.log(error);
            }
          );
    };
    useEffect(()=>{
    
    getAllRatings();
    },[]);


  return (
    <>
           <div style={{ marginTop: '2rem' }} >
           <h3>Reviews</h3>
          <Row className="g-4">
            {data.map((val) => {
              return (
                
                <Col style={{ padding: '0.5rem' }} >
                
                <Card style={{ width: '35rem',marginRight:2,marginLeft:2,backgroundColor:"#white",boxShadow: "7px 7px 7px #9E9E9E",borderColor:"white"}}>
                <Card.Body>
                      <div style={{display:'flex'}}>
                        <Card.Title style={{fontSize:20}} >{val.starCount}</Card.Title>
                        <Card.Img variant="top" src={star} style={{height:20,width:20}}/>
                      </div>
                  
                        <Card.Title>{val.userName}</Card.Title>
                        <Card.Text>{val.experience}</Card.Text>
                      </Card.Body>
                      
                </Card>
               
              </Col>
              );
            })}
          </Row>
          </div>
       
    </>
  );
};

export default PackageReview;
