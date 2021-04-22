import React, { Component } from 'react';
import './company.css';


function Afterc (props) { 
        return ( 
            <div>
                <section className="left">
                   <div className="left-div-1">
                       <h3>Company info</h3>
                       <button className="save" onClick={props.onClick}>Save</button>
                   </div>
                   <div className="left-div-2">
                       <div id="aftr-input" className="left-div-2-sub">
                           <i class="fa fa-joomla"></i>
                           <div>
                               <input className="larg" type="text" placeholder="Beer pub srl" />
                           </div>
                       </div>

                       <div id="aftr-input" className="left-div-2-sub">
                       <i class="fa fa-map-marker"></i>
                           <div>
                           <input className="larg" placeholder="Via Americo Vespucci, 14" /><br></br>
                           <input className="sm" placeholder="20214" /> <input className="sm" placeholder="Milano" /> 
                           <select className="select">
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                           </select>
                           </div>
                       </div>

                       <div id="aftr-input" className="left-div-2-sub">
                       <i class="fa fa-file"></i>
                           <div>
                               <input className="larg" type="text" placeholder="382340092" />
                           </div>
                       </div>
                   </div>
               </section>
            </div>
         );
    }
 
export default Afterc;
