import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import UserNavbar from './UserNavbar';
import Table from '@mui/material/Table';
import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import '../styles/MyBooking.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from "./Rating";
import EditRating from "./EditRating";
import EditBooking from "./EditBooking";

function MyBooking(){
    const [data,setData] = useState([
        {
            book_id:'1',
            packageName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);
    const getUserBookings=()=>{
        axiosObject.get(`/getAppoinments/user`).then(
            (response)=>{
              console.log("booking fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };

    const deleteRating=(value)=>{
        axiosObject.delete(`/deleteRating/${value}`).then(res=>{
            console.log("Rating Deleted");
            console.log(res);
            refreshPage();
        }).catch(err=>{
          console.log(err);
        })
    }


    const remove=(value)=>{
        axiosObject.delete(`/deleteAppoinment/${value}`).then(
            (response)=>{
                console.log("User Deleted");
                console.log(response);
                toast.error('Your appoinment has been cancelled,Charges will be refunded soon',{autoClose: 3000});
                setTimeout(() => {  refreshPage()}, 3000);
            },(error)=>{
                console.log(error);
            }
        )
    };
    const refreshPage=()=>{
        window.location.reload(false);
    }
    useEffect(()=>{
    document.title= "MyBookings" 
    getUserBookings();
    },[]);

    const [modalData,setModalData] = useState([
        {
            book_id:'1',
            packageName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);
    const handlepay=()=>{
        window.location.replace("/user/payment");
    }
    const handleservice=()=>{
        let id = localStorage.getItem('appId');
        axiosObject.put(`/serviceend/${id}`).then(
          (response)=>{
            localStorage.removeItem("appId");
            toast.success('Thanks for making service with us',{autoClose: 2000});
            setTimeout(() => { window.location.replace('/user/mybooking'); }, 2000);
          },(error)=>{
            console.log(error);
          }
        )
      }
    const[show,setShow]=useState(false);
    const[show1,setShow1]=useState(false);
    const[show2,setShow2]=useState(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);

    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);

    const today = new Date().toISOString().slice(0,10);
    
        return(
     <>
     <ToastContainer/>
         <UserNavbar/>
     <div className="my-container" >
         
         <h1 style={{textAlign:'center',paddingTop:'5%'}}>BOOKINGS</h1>
         <div className="col-sm-6 shadow" style={{margin:'auto',paddingTop:'1%'}}>
         <Table className="table table-hover"  style={{width:'90%',margin:'auto'}}>
        
         <TableHead >
             <TableCell style={{width:'150px'}}>Booking No.</TableCell>
         <TableCell style={{width:'150px'}}>Package</TableCell>
         <TableCell style={{width:'150px'}}>Date</TableCell>
         <TableCell>Time</TableCell>
         <TableCell style={{width:'400px'}}>Status</TableCell>
         </TableHead>
                    <TableBody>
                       {
                           data.map(val => {
                               return(
                                
                                   <TableRow key="key">
                                       <TableCell>{val.book_id}</TableCell>
                                <TableCell>{val.packageName}</TableCell>
                                <TableCell>{val.bookingDate}</TableCell>
                                <TableCell>{val.bookingTime}</TableCell>
                               {val.bookingStatus ==="no" ?
                               <TableCell>
                                   
                               <OverlayTrigger
                                        overlay={
                                            <Tooltip id={'tooltip-top'}>
                                                Edit
                                            </Tooltip>
                                        }>
                                            <Button id="editappointmentbutton" onClick={()=>{handleShow();setModalData(val)}} data-toggle="modal" className="btn btn-secondary" style={{marginRight:'10px'}}>Edit</Button>
                                            </OverlayTrigger>
                                    <button className="btn btn-danger" id="deleteappointmentbutton" onClick={() => remove(val.book_id)} style={{margin:'auto'}}>Cancel</button>
                              
                                </TableCell>:
                               val.bookingStatus ==="reject" ?
                               <TableCell>
<p>Sorry, your booking has been cancelled by the service provider</p>
                               </TableCell>:
                               val.bookingStatus ==="accept"  && val.paymentDone==="no"
                            ?
                               <TableCell>
                                
                                   <button className="btn btn-success" id="paymentbutton" onClick={() => {localStorage.setItem("appId",val.book_id);  localStorage.setItem("appCharge",val.charges); handlepay();} }>Make Initial Payment to confirm your service </button>
                               
                               </TableCell>
                                
                           :  
                           val.bookingStatus ==="accept" && val.bookingDate > today  && val.paymentDone==="yes"
                           ?
                           <TableCell>
                                   
                                <button className="btn btn-danger" id="deleteappointmentbutton" onClick={() => remove(val.book_id)} style={{margin:'auto'}}>Cancel</button>
                          
                            </TableCell>

                           :val.bookingStatus ==="accept" && val.bookingDate <= today  && val.paymentDone==="yes" && val.serviceStatus === "no"
                           ? 
                           <TableCell>
                               <p>Wait for your service to be started</p>
                                 </TableCell> 
                                 :val.bookingStatus ==="accept" && val.bookingDate <= today  && val.paymentDone==="yes" && val.serviceStatus === "started"
                                 ? 
                                 <TableCell>
                                     <button className="btn btn-dark" id="servicebutton" onClick={() => {localStorage.setItem("appId",val.book_id);  handleservice();} }>Click when your service is completed</button>
                               
                                       </TableCell> 
                                        
                                              
                                 : val.bookingStatus ==="accept" && val.bookingDate <= today  && val.paymentDone==="yes" && val.serviceStatus === "ended" && val.rating ==null
                           ? 
                           <TableCell>
                                <button className="btn btn-success" id="reviewappointmentbutton" onClick={() => {handleShow1();setModalData(val)} }data-toggle="modal">Rate us</button>
                          
                                 </TableCell>
                          :val.bookingStatus =="accept" && val.bookingDate <= today  && val.paymentDone==="yes"&& val.serviceStatus === "ended" && val.rating!=null
                             ? <TableCell>
                                  <button className="btn btn-secondary" id="reviewappointmentbutton" onClick={() => {handleShow2();setModalData(val.rating)} }data-toggle="modal" style={{marginRight:'10px'}}>Review</button>
                                <button className="btn btn-danger" onClick={()=>{deleteRating(val.book_id);}} >Delete review</button>
                          
                              </TableCell>:
                              <TableCell>

                              </TableCell>
                                }
                                  </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>
                    </div>
                   {/*} <button onClick={() => {handleShow1()}}>
                        Reviews</button>*/}
                    <Modal show={show1} onHide={handleClose1} >
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <Rating booking={modalData}/>
                            </Modal.Body>
                        </Modal.Header>

                    </Modal>

                    <Modal show={show2} onHide={handleClose2} >
                        <Modal.Header closeButton>
                            <Modal.Body>
                                <EditRating Rating={modalData}/>
                            </Modal.Body>
                        </Modal.Header>

                    </Modal>
                    
                  
                    <Modal show={show} onHide={handleClose} >
                                <EditBooking booking={modalData}/>
                    </Modal>
                    
     </div>
     
     </>
     )}

 

export default MyBooking;