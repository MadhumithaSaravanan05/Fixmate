import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axiosObject from '../../api/bootapi';
import '../styles/ProfRegister.css';
import { ToastContainer, toast } from 'react-toastify';
function EditProfile({profile}){

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
        axiosObject.put(`/editUser`,data).then(
           (response)=>{
             console.log(response);
             window.location.replace('/user/myprofile');
           },(error)=>{
             console.log(error);
           }
         )
       }
    
    return (
      <Formik
        initialValues={{
            u_id:profile.id,
            name: profile.name,
            username: profile.username,
            mobile:profile.mobile,
            email: profile.email,
            password: profile.password,
          
        }}
        validationSchema={validate}
        onSubmit={values => {
        
          console.log(values);
          sendData(values);
          
        }}
      >
        {formik => (
          <div className="container3">
            <h1 className="title" >Edit Profile </h1>
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
          <div className="input-box1">
            <span className="details">Password</span>
            <TextBar id="password" name="password" type="password" />
          </div>
  
              
             <button id="updateBookingButton" className="btn btn-dark mt-3" type="submit">Update</button>
              <button id="resetButton" className="btn btn-danger mt-3 ml-3"style={{marginLeft:15}} type="reset">Reset</button>
              
              </div>
            </Form>
            </div>
  
          </div>
        )}
      </Formik>
    )
  } 
export default EditProfile;
