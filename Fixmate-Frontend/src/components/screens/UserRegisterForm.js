import React from 'react';
import {ErrorMessage, Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axiosObject from '../../api/bootapi';
function UserRegisterForm(){
  const validate = Yup.object({
    
    name: Yup.string()
      .max(30, 'Must be 30 characters or less')
      .required('Name is Required'),
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Username is Required'),
    mobile:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Mobile Number is Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      password: Yup.string()
      .required('Password is required')
        .min(6, 'Password must be at least 6 charaters'),
    
    
    
    
  })
  const sendData=(data)=>{
    axiosObject.post(`/register`,data).then(
      (response)=>{
        console.log(response);
       
        if(response.data==="Email"){
          toast.error('Email Already exist!!',{autoClose: 2000});
        }
        if(response.data==="Mobile"){
          toast.error('Mobile Number  Already exist!!',{autoClose: 2000});
        }
        if(response.data==="Username"){
          toast.error('Username  Already exist!!',{autoClose: 2000});
        }
        if(response.data==="Success"){
          toast.success('Registration Successfull!',{autoClose: 4000});
          setTimeout(() => {  window.location.replace('/Login'); }, 2000);
        }
        if(response.data==="Error"){
          toast.error('Something went Wrong Try again!!',{autoClose: 2000});
        }
      
      }
    )
  }
  return (
    <>
    <ToastContainer/>
    <Formik
      initialValues={{
        
        name: '',
        username: '',
        mobile:'',
        email: '',
        password: '',
        
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        sendData(values);
      }}
    >
      {formik => (
        <div className="body">
          <div className="container">
          <h1 className="title" >Register</h1>
          <div className="content">
          <Form>
          <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <TextBar id="name" name="name" type="text" />
          </div>
          <div className="input-box">
            <span className="details">User Name</span>
            <TextBar id="username" name="username" type="text" />
          </div>
          <div className="input-box">
            <span className="details">Mobile Number</span>
            <TextBar id="mobilenumber" name="mobile" type="text" />
          </div>
          <div className="input-box">
            <span className="details">E-Mail</span>
            <TextBar id="email" name="email" type="email" />
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <TextBar id="password" name="password" type="password" />
          </div>
          
          <div className="title">
         
                 Already have an account?
                  
                    <Link className='title' id="loginlink" to="/login">Login &nbsp; &nbsp; &nbsp; &nbsp;</Link>
                
                </div>
            
            <button id="registerbutton" className="input1" type="submit">Register</button>
            
            <button id="resetbutton" className="input1" type="reset">Reset</button>
            
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
export default UserRegisterForm;
