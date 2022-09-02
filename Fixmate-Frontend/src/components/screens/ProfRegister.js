import React, {useState,useEffect} from 'react';
import ProfRegisterForm from './ProfRegisterForm';
import '../styles/ProfRegister.css';
import MainNavbar from './MainNavbar';
function ProfRegister(){
    useEffect(() => {
        document.title = "Professional Registration";
      },[]);
      
    return(
        
        <div >
            <MainNavbar/>
                <div >
                    <ProfRegisterForm/>
                </div>

            
        
        </div>
    );
}
export default ProfRegister;