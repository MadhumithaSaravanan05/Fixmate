import { requirePropFactory } from '@material-ui/core';
import React,{useEffect} from 'react';
import { Link } from "react-router-dom";

import '../styles/Mainpage.css';
import MainNavbar from './MainNavbar'
function Mainpage(){
    useEffect(() => {
        document.title = "Welcome";
        localStorage.clear();
      },[]);
    return(
        <div>
            <MainNavbar/>
            <div className="slider-body">
                <div className="slider"> 
                </div>
            </div>
        </div>
        
            
    );
    }
    export default Mainpage;
