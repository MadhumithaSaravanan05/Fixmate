import React from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axiosObject from '../../api/bootapi';
import '../styles/Appoinments.css';
function EditBooking({booking}){

    const validate = Yup.object({
        
      packageName: Yup.string()
      
      .required('Name of the product is Required'),
    
    contactNumber:Yup.string()
      .min(10,'should be 10 number')
      .max(10,'should be 10 number')
      .required('Mobile Number is Required'),
    bookingDate: Yup.date()
    .transform((curr, orig) => orig === '' ? null : curr)
    .required('Date is required')
    .nullable()
    .min(new Date(), "Booking date should be from tomorrow!")
,
    
    bookingTime:Yup.string()
      .required('Please mention time from 10.00AM to 7.00 PM')
      
    })
    const sendData=(data)=>{
      axiosObject.put(`/editAppoinment`,data).then(
        (response)=>{
          console.log(response);
          window.location.replace('/user/mybooking');
        },(error)=>{
          console.log(error);
        }
      )
    }
    
    return (
      <Formik
        initialValues={{
          book_id:booking.book_id,
          u_id:booking.u_id,
          sc_id:booking.sc_id,
          charges:booking.charges,
          packageName:booking.packageName,
          bookingDate:booking.bookingDate,
          contactNumber:booking.contactNumber,
          bookingTime:booking.bookingTime,
          doorNumber:booking.doorNumber,
          street:booking.street,
          city:booking.city,
          state:booking.state,
          pincode:booking.pincode,
          landmark:booking.landmark,
          
        }}
        validationSchema={validate}
        onSubmit={values => {
        
          console.log(values);
          sendData(values);
          
        }}
      >
        {formik => (
          <div className="container3">
            <h1 className="title" >Edit Booking </h1>
            <div className="content">
            <Form>
            <div className="user-details2">
            <div className="input-box4">
                    <span className="details">Booking Date</span>
                    <TextBar id="bookingdate" name="bookingDate" type="date" className="form-control select-date" />
                  </div>
                  <div className="input-box4">
                    <span className="details">Booking Time</span>
                    <TextBar id="bookingtime" name="bookingTime" type="time" className="form-control select-time"/>
                  </div>
                  <div className="input-box1">
                    <span className="details">Contact Number</span>
                    <TextBar id="contactnumber" name="contactNumber" type="text" />
                  </div>
                  <div className="input-box5">
                    <span className="details">Door No.</span>
                    <TextBar id="doornumber"  name="doorNumber" type="text" />
                  </div>
                  <div className="input-box6">
                    <span className="details">Street</span>
                    <TextBar id="street" name="street" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">City</span>
                    <TextBar id="city"  name="city" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">State</span>
                    <TextBar id="state"  name="state" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">Pincode</span>
                    <TextBar id="pincode"  name="pincode" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">Landmark</span>
                    <TextBar id="landmark"  name="landmark" type="text" />
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
export default EditBooking;
