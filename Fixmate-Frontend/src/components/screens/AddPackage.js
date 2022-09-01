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
import '../styles/ProfRegister.css';
import AdminNavbar from './AdminNavbar';
import "../styles/UserHome.css";
import AddPackageForm from "./AddPackageForm";

const AddPackage = () => {

   
    useEffect(()=>{
    document.title= "AddPackage"
   
    },[]);
  
  const handleClick = (value)=>{
    localStorage.setItem("centerType",JSON.stringify(value));
  }
  return (
    < >
    <AdminNavbar/>
    <div>
        <AddPackageForm/>
    </div>
</>

  )
}

export default AddPackage;