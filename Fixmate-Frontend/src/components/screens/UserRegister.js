import React, {useState,useEffect} from 'react';
import UserRegisterForm from './UserRegisterForm';
import '../styles/ProfRegister.css';
import MainNavbar from './MainNavbar';
function UserRegister(){
    useEffect(() => {
        document.title = "User Registration";
      },[]);
      
    return(
        
        <div >
            <MainNavbar/>
                <div >
                    <UserRegisterForm/>
                </div>

            
        
        </div>
    );
}
export default UserRegister;