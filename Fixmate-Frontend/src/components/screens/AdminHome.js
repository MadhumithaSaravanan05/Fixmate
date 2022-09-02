import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

import AdminNavbar from './AdminNavbar';
import "../styles/UserHome.css";

const AdminHome = () => {

   
    useEffect(()=>{
    document.title= "AdminHome"
   
    },[]);
  
  const handleClick = (value)=>{
    localStorage.setItem("centerType",JSON.stringify(value));
  }
  return (
    < >
    <AdminNavbar/>
    <div className="body1">
    <div className="img-container">
			<h1>OUR SERVICES</h1>
			<div className="photo-gallery">
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(1)}}>
				<div className="pic" name="PAINTING">
					<img src= {require('../assets/img1.jpg')}/>
				</div>
            </Link>
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(2)}}>
				<div className="pic" name="SALON">
					<img src={require('../assets/img2.jpg')}/>
				</div>
            </Link>
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(3)}}>
				<div className="pic" name="CAR SERVICE">
					<img src={require('../assets/img3.jpg')}/>
				</div>
            </Link>
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(4)}}>
				<div className="pic" name="AC SERVICE">
					<img src={require('../assets/img4.jpg')}/>
				</div>
            </Link>
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(5)}}>
				<div className="pic" name="CLEANING">
					<img src={require('../assets/img5.jpg')}/>
				</div>
            </Link>
            <Link id="viewreviewlink" to="/admin/service" onClick={()=>{handleClick(6)}}>
				<div className="pic" name="ELECTRICAL REPAIR">
					<img src={require('../assets/img6.jpg')}/>
				</div>
            </Link>
			</div>
		</div>







    </div>
</>

  )
}

export default AdminHome;