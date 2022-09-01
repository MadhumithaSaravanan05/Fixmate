import React, { useEffect, useState } from "react";
import axiosObject from "../../api/bootapi";
import AdminNavbar from './AdminNavbar';
import Table from '@mui/material/Table';


import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import '../styles/MyBooking.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListUsers(){
    let id = localStorage.getItem('centerId');
    const [data,setData] = useState([
        {
            id:"1",
            name:"Sonata Service",
            username:"madhu",
            email:"madhu@gmail.com",
            mobile:"1234567890"
        },
    ]);
    
    const getUsers=()=>{
        axiosObject.get(`/getuser`).then(
            (response)=>{
              console.log("user fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
    };

    

      

    useEffect(()=>{
    document.title= "Users" 
    getUsers();
    },[]);

  
    
        return(
            
     <>
     <ToastContainer/>
         <AdminNavbar/>
     <div className="home-body"style={{color:"black",margin:'auto',fontWeight:'bolder'}}>
       
         <h2 style={{textAlign:'center',paddingTop:'3%'}}>USERS</h2>
         
         <Table className="table table-striped" style={{width:'70%', margin:'auto'}}>
        
         <TableHead>
             <TableCell style={{width:'50px'}}>User ID</TableCell>
         <TableCell style={{width:'100px'}}>Name</TableCell>
         <TableCell style={{width:'150px'}}>User Name</TableCell>
         <TableCell style={{width:'150px'}}>Email ID</TableCell>
         <TableCell style={{width:'150px'}}>Mobile Number</TableCell>
         
         </TableHead>
                    <TableBody>
                       {
                           data.map(val => {
                               return(
                                
                                   <TableRow key="key">
                                       <TableCell>{val.id}</TableCell>
                                <TableCell>{val.name}</TableCell>
                                <TableCell>{val.username}</TableCell>
                                <TableCell>{val.email}</TableCell>
                                <TableCell>{val.mobile}</TableCell>
                               
                                  </TableRow>
                                )})
                       }
                    </TableBody>
                    </Table>

                  
     </div>
     
     </>
     )}

 

export default ListUsers;