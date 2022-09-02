import { requirePropFactory } from '@material-ui/core';
import React,{useEffect} from 'react';
import { Link } from "react-router-dom";

import '../styles/Mainpage.css';
function MainNavbar(){
    useEffect(() => {
        document.title = "Fixmate  ||  Welcome";
        localStorage.clear();
      },[]);
    return(
        <div>
            <div>
            <nav>
               <div className="logo1"><p>FIXMATE</p></div>
		        <ul>
			        <li><Link to="/register">Login/Register</Link></li>
			        
			        <li><Link to="/prof-register">Register as a Professional</Link></li>
		        </ul>
	        </nav>
            </div>
            
        </div>
        
            
    );
    }
    export default MainNavbar;
