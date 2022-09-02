import React, {useState,useEffect} from 'react';
import UserLoginForm from "./UserLoginForm";
import '../styles/ProfRegister.css';
import MainNavbar from './MainNavbar';
function UserLogin(){
    useEffect(() => {
        document.title = "Login";
      },[]);
      
    return(
            <div>
                <MainNavbar/>
                <div >
                    <UserLoginForm/>
                </div>
            </div>
           
        
    );
}
export default UserLogin;