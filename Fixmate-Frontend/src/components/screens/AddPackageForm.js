import React from 'react';
import {ErrorMessage, Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosObject from '../../api/bootapi';
function AddPackageForm(){
  let id = localStorage.getItem('centerType');
  const validate = Yup.object({
    
    packageName: Yup.string()
      .required('PackageName is Required'),
    imageurl: Yup.string()
      .required('ImageUrl is Required'),
    price:Yup.string()
      .required('Price is Required'),
    details: Yup.string()
      .required('Details is required'),
  })
  const sendData=(data)=>{
    axiosObject.post(`/addPackage`,data).then(
      (response)=>{
        console.log(response);
          toast.success('Package Added Successfully',{autoClose: 2000});
          setTimeout(() => {  window.location.replace('/admin/home'); }, 2000);
       
      
      }
    )
  }
  return (
    <>
    <ToastContainer/>
    <Formik
      initialValues={{
        
        packageName:'',
        details:'',
        imageurl:'',
        price:'', 
        sctype:id,
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
            <span className="details">Package Name</span>
            <TextBar id="packageName" name="packageName" type="text" />
          </div>
          <div className="input-box">
            <span className="details">Details</span>
            <TextBar id="details" name="details" type="text" />
          </div>
          <div className="input-box">
            <span className="details">Price</span>
            <TextBar id="price" name="price" type="text" />
          </div>
          <div className="input-box">
            <span className="details">Image URL</span>
            <TextBar id="imageurl" name="imageurl" type="text" />
          </div>
          <div className="input-box">
            <span className="details">SC Type</span>
            <TextBar id="sctype" name="sctype" type="text" />
          </div>
          
          
            
            
            <button id="registerbutton" className="input1" type="submit">Add</button>
            
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
export default AddPackageForm;
