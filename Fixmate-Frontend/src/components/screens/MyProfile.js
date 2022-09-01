
import React, {useState,useEffect} from 'react';
import UserLoginForm from "./UserLoginForm";
import '../styles/ProfRegister.css';
import axiosObject from '../../api/bootapi';
import UserNavbar from './UserNavbar';
import { Modal,Button,OverlayTrigger,Tooltip } from "react-bootstrap";
import EditProfile from './EditProfile';
function MyProfile(){
    const getUser=()=>{
        axiosObject.get(`/mydetails`).then(
            (response)=>{
              console.log("user fetched");
              setData(response.data);
            },(error)=>{
              console.log(error);
            }
          );
      };
    
      
      const [data,setData] = useState([
        {
            name:'madhu',
            username:"Sonata Service",
            mobile:"4534332323",
            email:"abc@gmail.com",
            password:"csdjvufv",
        },
    ]);
      const [modalData,setModalData] = useState([
        {
            name:'madhu',
            username:"Sonata Service",
            mobile:"4534332323",
            email:"abc@gmail.com",
            password:"csdjvufv",
        },
    ]);
      useEffect(()=>{
        document.title= "MyProfile"
        getUser();
        },[]);
        const[show,setShow]=useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);
    return(
            <div>
                <UserNavbar/>
                <div >
                <div className="body">
          <div className="login-container">
          <h1 className="title" >My Profile</h1>
          <div className="content">
         
            <table className="table ">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{data.name}</td>
                </tr>
                <tr>
                   <td>UserName</td>
                   <td>{data.username}</td>
                </tr>
                <tr>
                   <td>Mobile</td>
                   <td>{data.mobile}</td>
                </tr>
                <tr>
                    <td>Email ID</td>
                    <td>{data.email}</td>
                </tr>
                </tbody>
            </table>
            <button id="registerbutton" className="btn btn-success"  onClick={()=>{handleShow();setModalData(data)}} data-toggle="modal">Update</button>
            
            
            
        
          </div>
          </div>
        </div>
                </div>
                <Modal show={show} onHide={handleClose} >
                                <EditProfile profile={modalData}/>
                    </Modal>
            </div>
           
        
    );
}
export default MyProfile;