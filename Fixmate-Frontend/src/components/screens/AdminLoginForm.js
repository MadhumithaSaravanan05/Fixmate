import React from 'react';
import { ErrorMessage,Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import axiosObject from '../../api/bootapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminLoginForm(){
  const validate = Yup.object({
    
    username: Yup.string()
      .required('Username is required'),
    password: Yup.string()
      .required('Password is required'),
  })
  const sendData=(data)=>{
    console.log("I'm here");
    axiosObject.post("/authenticate",data).then(res=>{
      console.log(res);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("usertoken",res.data.jwtToken);
      if(data.role==="admin") {
        localStorage.setItem("isAdmin","true");
        toast.success('Welcome Admin',{autoClose: 2000});
        setTimeout(() => { window.location.replace('/admin/home'); }, 2000);
        
      } else if(data.role==="retailer"){
        localStorage.setItem("isRetailer","true");
        toast.success('Welcome Retailer',{autoClose: 2000});
        setTimeout(() => {  window.location.replace('/retail/home'); }, 2000);
      }
     else{
      localStorage.setItem("isUser","true");
      toast.success('Welcome User',{autoClose: 2000});
      setTimeout(() => {  window.location.replace('/user/home'); }, 2000);
    }
    }).catch(err=>{
      console.log(err);
      toast.error('Invalid Credentials',{autoClose: 2000});
    })
  }
  return (
    <>
    <ToastContainer/>
    <Formik
      initialValues={{
        username: '',
        password: '',
        role:'admin',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
        sendData(values);
      }}
    >
      {formik => (
        <div className='body2'>
            <div className='login-container'>
          <div className='title' >Login</div>
          <div className='content'>
          <Form>
            <div className='user-details1'>
                <div className="input-box1">
                    <span className="details">User Name</span>
                    <TextBar id="username" name="username" type="text" />
                </div>
                <div className="input-box1">
                    <span className="details">Password</span>
                    <TextBar id="password" name="password" type="password" />
                </div>


                <button id="loginbutton" className="input2" type="submit">Login</button>


                
            
            
            </div>
          </Form>
          </div>
        </div>
        </div>
      )}
    </Formik>
    </>
  )
} 
export default AdminLoginForm;
