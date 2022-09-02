import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axiosObject from '../../api/bootapi';
import '../styles/Appoinments.css';
function EditPackage({Package}){

    const validate = Yup.object({
        
        packageName: Yup.string()
        .required('PackageName is Required'),
      imageurl: Yup.string()
        .required('ImageUrl is Required'),
      price:Yup.string()
        .required('Price is Required'),
      details: Yup.string()
        .required('Details is required'),
      sctype: Yup.string()
         .required('sctype is required'),
    })
    const sendData=(data)=>{
      axiosObject.put(`/updatePackage`,data).then(
        (response)=>{
          console.log(response);
          window.location.replace('/admin/home');
        }
      )
    }
    
    return (
      <Formik
        initialValues={{
            packageName:Package.packageName,
            details:Package.details,
            imageurl:Package.imageurl,
            price:Package.price, 
            sctype:Package.sctype,
          
        }}
        validationSchema={validate}
        onSubmit={values => {
        
          console.log(values);
          sendData(values);
          
        }}
      >
        {formik => (
           
           <div className="container">
           <h1 className="title" >Edit Package</h1>
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
           
           
             
             
             <button id="registerbutton" className="input1" type="submit">Update</button>
             
             <button id="resetbutton" className="input1" type="reset">Reset</button>
           </div>
           </Form>
           </div>
           </div>
      
        )}
      </Formik>
    )
  } 
export default EditPackage;
