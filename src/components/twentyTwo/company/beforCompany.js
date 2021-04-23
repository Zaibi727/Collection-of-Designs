import React, { Component } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiFileList3Line } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import './company.css';


function Beforc (props) {
        return ( 
            <div>
                <section className="left">
                   <div className="left-div-1">
                       <p className="h3">Company info</p>
                       <button className="befor-edit-c" onClick={props.onClick}>Edit</button>
                   </div>
                   <div className="left-div-2">
                       <div className="left-div-2-sub">
                       <MdBusinessCenter className="iconc" />
                           <div>
                               <p className="h4">Beer pub srl</p>
                               <p className="gray">Business name</p>
                           </div>
                       </div>

                       <div className="left-div-2-sub">
                       <HiOutlineLocationMarker className="iconc" />
                           <div>
                           <p className="h4">United States, Pasadena 2232<br></br> Avondale Ave undefined</p>
                               <p className="gray">Full address</p>
                           </div>
                       </div>

                       <div className="left-div-2-sub">
                       <RiFileList3Line className="iconc" />
                           <div>
                               <p className="h4">3823340092</p>
                               <p className="gray">VAT number</p>
                           </div>
                       </div>
                   </div>
               </section>
            </div>
         );
    }
 
export default Beforc;