import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Modal from 'react-modal'
import { Link } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import '../styles/UserHome.css';
import PackageReview from "./PackageReview";
import { autocompleteClasses } from "@mui/material";
const ListPackages = () => {
  let id = localStorage.getItem('centerType');
  
  const throwDetails = (value)=>{
    localStorage.setItem("SelectedCenter",JSON.stringify(value));
  }
  const throwID = (value)=>{
    localStorage.setItem("centerId",JSON.stringify(value.id));
  }
    const getAllServices=()=>{
        axiosObject.get(`/viewPackageByType/${id}`).then(
            (response)=>{
              console.log("Type fetched");
              setCenters(response.data);
              localStorage.removeItem("centerType");
            },(error)=>{
              console.log(error);
            }
          );
    };
    useEffect(()=>{
    document.title= "Packages"
    getAllServices();
    },[]);
    const [centers,setCenters]=useState([
    ]);
    const [filter,setFilter] = useState('');
    const deleteCenter=(value)=>{
      axiosObject.delete(`/deleteCenter/${value}`).then(
          (response)=>{
              console.log("center Deleted");
              console.log(response);
              refreshPage();
          },(error)=>{
              console.log(error);
          }
      )
  }
  const refreshPage=()=>{
    window.location.reload(false);
}
  const SearchText = (event) =>{
    setFilter(event.target.value);
  }
    let dataSearch = centers.filter(item =>{
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
    )});
    const isAdmin = localStorage.getItem("isAdmin");
    const isUser = localStorage.getItem("isUser");
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
  return (
    <>
     <UserNavbar/>
       
        
        <div className="container">
         
        <Container className='text-center' >
          <Form.Control  id="searchbar" placeholder="Search" value = {filter} onChange={SearchText.bind(this)} />
        </Container>
   
        {dataSearch.map((center) => {<dataSearch key ={center.id}/>
          return (
            
                  <>
                  <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                      style={{  overlay: {background: 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6))',margin:'auto',},content: {margin:'auto',width:'100vh',height:'70vh'}}} shouldCloseOnOverlayClick={true}>
                      <span onClick={() => {setModalIsOpen(false)}} style={{cursor:'pointer',float:'right',fontSize:'45px',fontWeight:'400'}}class="close">&times;</span><h2>{center.packageName}</h2>
                     
                      <div >
				                <img style={{width:'100%',height:'250px'}} src={center.imageurl} />
			                </div>
                      
                      <div style={{marginTop:'1rem'}} >{center.details}</div>
                      <div>
                           
                      </div>
                      <PackageReview/>
                      </Modal>
         
                <div className="card mt-4 shadow" >
		            <div className="row ">
			            <div className="col-md-4">
				            <img src={center.imageurl} class="img-fluid"/>
			            </div>
			        <div className="col-md-8">
				        <h2 className="card-title mt-3">{center.packageName}</h2>
				            <p>&#8377; {center.price}</p>
				            <p>{center.details}</p>
				            <button className="btn btn-danger" onClick={() => {setModalIsOpen(true);throwDetails(center); localStorage.setItem("scId",center.id)}} >Read More</button>&nbsp;&nbsp;
				            <Link id="booklink" to="/user/BookAppoinment"><button className="btn btn-success" onClick={()=>{throwDetails(center)}}>Book now</button></Link>
			        </div>	
	        </div> 
        </div>
        
      </>
           )
        })}
       
  
        </div>
     
    </>
  );
};

export default ListPackages;
