import React, {useState,useEffect} from 'react';
import AdminLoginForm from "./AdminLoginForm";
import '../styles/ProfRegister.css';
function AdminLogin(){
    useEffect(() => {
        document.title = "AdminLogin";
      },[]);
      
    return(
            <div>
                
                <div >
                    <AdminLoginForm/>
                </div>
            </div>
           
        
    );
}
export default AdminLogin;