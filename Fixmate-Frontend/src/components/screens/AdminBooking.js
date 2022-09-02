import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import AdminNavbar from './AdminNavbar';
import Table from '@mui/material/Table';


import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import '../styles/MyBooking.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminBooking(){
    let id = localStorage.getItem('centerId');
    const [data,setData] = useState([
        {
            book_id:'1',
            productName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);
    const handleservice=()=>{
        let id = localStorage.getItem('appId');
        axiosObject.put(`/servicestart/${id}`).then(
          (response)=>{
            localStorage.removeItem("appId");
            toast.success('Your service started',{autoClose: 2000});
            setTimeout(() => { window.location.replace('/admin/booking'); }, 2000);
          },(error)=>{
            console.log(error);
          }
        )
      }
    const getSCBookings=()=>{
        axiosObject.get(`/getAppoinments`).then(
            (response)=>{
              console.log("booking fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };

    const handleStatusAccept=()=>{
        let id = localStorage.getItem('appId');
        axiosObject.put(`/statusaccept/${id}`).then(
          (response)=>{
            localStorage.removeItem("appId");
            toast.success('Accepted successfully',{autoClose: 2000});
            setTimeout(() => { window.location.replace('/admin/booking'); }, 2000);
          },(error)=>{
            console.log(error);
          }
        )
      }
      const handleStatusReject=()=>{
        let id = localStorage.getItem('appId');
        axiosObject.put(`/statusreject/${id}`).then(
          (response)=>{
            localStorage.removeItem("appId");
            toast.success('Rejected successfully',{autoClose: 2000});
            setTimeout(() => { window.location.replace('/admin/booking'); }, 2000);
          },(error)=>{
            console.log(error);
          }
        )
      }
      const [modalData,setModalData] = useState([
        {
            book_id:'1',
            productName:"Sonata Service",
            bookingDate:"27/2/2022",
            bookingTime:"4pm to 6pm",
        },
    ]);

      const[show,setShow]=useState(false);
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

    useEffect(()=>{
    document.title= "Bookings" 
    getSCBookings();
    },[]);

  
    
        return(
            
     <>
     <ToastContainer/>
         <AdminNavbar/>
     <div className="home-body"style={{color:"black",margin:'auto',fontWeight:'bolder'}}>
       
         <h2 style={{textAlign:'center',paddingTop:'3%'}}>BOOKINGS</h2>
         
         <Table className="table table-striped" style={{width:'70%', margin:'auto'}}>
        
         <TableHead>
             <TableCell style={{width:'150px'}}>Booking No.</TableCell>
         <TableCell style={{width:'200px'}}>Package Name</TableCell>
         <TableCell style={{width:'150px'}}>Date</TableCell>
         <TableCell style={{width:'150px'}}>Time</TableCell>
         <TableCell style={{width:'200px'}}>Payment Done</TableCell>
         <TableCell style={{width:'250px'}}>Service Status</TableCell>
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
                                <TableCell>{val.paymentDone}</TableCell>
                               {
                                   val.bookingStatus === "no" ?
                                   <TableCell>
  <button className="btn btn-success" id="paymentbutton" onClick={() => {localStorage.setItem("appId",val.book_id);  handleStatusAccept();} }>Accept</button>
  <button className="btn btn-danger" id="paymentbutton" onClick={() => {localStorage.setItem("appId",val.book_id);  handleStatusReject();} }>Reject</button>
                               
                                   </TableCell>: 
                                   val.bookingStatus === "reject" ?
                                   <TableCell>
<p>This Booking has been rejected by you </p>
                                   </TableCell>:
                                   val.bookingStatus === "accept"  && val.paymentDone === "yes" && val.serviceStatus === "no"?
                                   <TableCell>
 <button className="btn btn-warning" id="servicebutton" onClick={() => {localStorage.setItem("appId",val.book_id);  handleservice();} }>Start the service</button>
                               
                                   </TableCell>:
                                   
                                
                                   val.bookingStatus === "accept"  && val.paymentDone === "yes" && val.serviceStatus === "ended" && val.charges != null  ?
                                   <TableCell>
                                   <p>Appoinment Completed</p>                              
                                   </TableCell>:
                                   <TableCell>
<p></p>
                                   </TableCell>

                               }
                                  </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>

                  
     </div>
     
     </>
     )}

 

export default AdminBooking;