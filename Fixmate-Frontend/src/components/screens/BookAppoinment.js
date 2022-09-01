import React,{useEffect, useState} from 'react';
import { Formik, Form} from 'formik';
import TextBar from './TextBar';
import * as Yup from 'yup';
import axiosObject from '../../api/bootapi';
import '../styles/Appoinments.css';
import UserNavbar from './UserNavbar';

function BookAppoinment(){
  let center=JSON.parse(localStorage.getItem('SelectedCenter'));
 
  const getUser=()=>{
    axiosObject.get(`/mydetails`).then(
        (response)=>{
          console.log("user fetched");
          setUser(response.data);
        },(error)=>{
          console.log(error);
        }
      );
  };

  const [user,setUser] = useState([{"id":1,"mobile":"4534332323"}]);
  
  useEffect(()=>{
    document.title= "SlotBooking"
    getUser();
    },[]);
  const validate = Yup.object({
    bookingDate: Yup.date()
    .transform((curr, orig) => orig === '' ? null : curr)
    .required('Date is required')
    .nullable()
    .min(new Date(), "Booking date should be from tomorrow!"),
    bookingTime:Yup.string()
      .required('Please mention time from 10.00AM to 7.00 PM'),
    doorNumber:Yup.string()
      .required('Please enter Door No.'),
    street:Yup.string()
      .required('Please enter street'),
      city:Yup.string()
      .required('Please enter city'),
      state:Yup.string()
      .required('Please enter state'),
      pincode:Yup.string()
      .required('Please enter pincode')
      
  })
  const postDatatoServer=(data)=>{
    axiosObject.post(`/appoinment`,data).then(
      (response)=>{
        console.log(response);
        localStorage.removeItem('SelectedCenter');
        window.location.replace("/user/mybooking");
      
      },(error)=>{
        console.log(error);
        console.log("error");
      }
    )
  }
  return (
    <div >
    <UserNavbar/>
    <Formik
    enableReinitialize={true}
      initialValues={{
        u_id:user.id,
        sc_id:center.id,
        packageName:center.packageName,
        charges:center.price,
        contactNumber:user.mobile,
        bookingDate:'',
        bookingTime:'',
        doorNumber:'',
        street:'',
        city:'',
        state:'',
        pincode:'',
        landmark:'',
      }}
      validationSchema={validate}
      onSubmit={values => {
      
        console.log(values);
        postDatatoServer(values);
      }}
    >
      {formik => (
        <div className='body' >
          <div className='container2'>
          <h1 className="title" >Book Your Appoinment</h1>
            <div className='content'>
              <Form>
                <div className='user-details2'>
                  <div className="input-box2">
                    <span className="details">Booking Date</span>
                    <TextBar id="bookingdate" name="bookingDate" type="date" className="form-control select-date" />
                  </div>
                  <div className="input-box2">
                    <span className="details">Booking Time</span>
                    <TextBar id="bookingtime" name="bookingTime" type="time" className="form-control select-time"/>
                  </div>
                  <div className="input-box2">
                    <span className="details">Contact Number</span>
                    <TextBar id="contactnumber" name="contactNumber" type="text" />
                  </div>
                  <div className="input-box3">
                    <span className="details">Door No.</span>
                    <TextBar id="doornumber"  name="doorNumber" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">Street</span>
                    <TextBar id="street" name="street" type="text" />
                  </div>
                  <div className="input-box2">
                    <span className="details">City</span>
                    <TextBar id="city"  name="city" type="text" />
                  </div>
                  <div className="input-box2">
                    <span className="details">State</span>
                    <TextBar id="state"  name="state" type="text" />
                  </div>
                  <div className="input-box3">
                    <span className="details">Pincode</span>
                    <TextBar id="pincode"  name="pincode" type="text" />
                  </div>
                  <div className="input-box4">
                    <span className="details">Landmark</span>
                    <TextBar id="landmark"  name="landmark" type="text" />
                  </div>
                  
                  <button id="resetbutton" className="input1" type="reset">RESET</button>
                  <button id="bookappointmentbutton" className="input1" type="submit">BOOK</button>
                </div> 
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
    </div>
  )
} 
export default BookAppoinment;
