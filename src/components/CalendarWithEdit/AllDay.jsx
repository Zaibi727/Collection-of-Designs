import React, { useState, useEffect, useRef } from 'react';
import './calendaredit.css';
import { IoIosArrowDown } from "react-icons/io";
import { OperatorNodeDependencies } from 'mathjs';

export default function AllDay () {
    const [clicked, setClicked] = useState(false);     
    const [open, setOpen] = useState(false); 


    const leftOpen = () => {
        setClicked(true);
    }
    const leftClose = () => {
        setClicked(false);
    }
    const rightOpen = () => {
        setOpen(true);
    }
    const rightClose = () => {
        setOpen(false);
    }

        return (
           <div className="all-day">
               <div>
                   <EditBar>
                       <div className="date">12, Feb</div>
                       <div  className="sign">|</div>
                       <div className="llabel">All-Days</div>
                       <div  className="caret" onClick={leftOpen}><IoIosArrowDown /></div>
                       {clicked && <div>
                           <DropBox leftClose={leftClose}/>
                       </div>}
                   </EditBar>
               </div>
               <div>
               <EditBar>
                       <div className="date">12, Feb</div>
                       <div  className="sign">|</div>
                       <div className="llabel">From-To</div>
                       <div  className="caret" onClick={rightOpen}><IoIosArrowDown /></div>
                       {open && <div>
                           <DropBoxTwo rightClose={rightClose}/>
                       </div>}
                   </EditBar>
               </div>
           </div>
         
        );
    };



function EditBar(props) {
    return (
      <div className="editbar">
              {props.children}
      </div>
    );
  }

  function DropBox({leftClose}) {
    const [radio,setRadio] = useState("");
    return (
        <div className="dropboxone">
        <form className="dropboxTwoform">
        <div className="flex">
              <p className="selecthd">Select timeframe</p>
              <button className='rightclose' onClick={leftClose}><span aria-hidden="true">&times;</span></button>
          </div>
          <div className="flex">
              <label className='dplabel'>From - To</label>
              <input 
              className="dpradio" 
              type="radio" 
              checked={radio === "range"}
              value="range"
              onChange={(e)=>{setRadio(e.target.value)}}
              />
          </div>
          <div className="flex">
              <label className='dplabel'>All Day</label>
              <input 
                 className="dpradio" 
                 type="radio" 
                checked={radio === "days"}
                value="days"
                onChange={(e)=>{setRadio(e.target.value)}}
                 />
          </div>
          <div className="flex">
              <input className="dpinput" type="text" placeholder= "From" />
              <input className="dpinput" type="text" placeholder= "To" />
          </div>
          <button className="save" type="submit">Save</button>
        </form>
      </div>
    );
  }

  function DropBoxTwo({rightClose}) {
    const [radio,setRadio] = useState("");
    return (
      <div className="dropboxTwo">
        <form className="dropboxTwoform">
        <div className="flex">
              <p className="selecthd">Select timeframe</p>
              <button className='rightclose' onClick={rightClose}><span aria-hidden="true">&times;</span></button>
          </div>
          <div className="flex">
              <label className='dplabel'>From - To</label>
              <input 
              className="dpradio" 
              type="radio" 
              checked={radio === "range"}
              value="range"
              onChange={(e)=>{setRadio(e.target.value)}}
              />
          </div>
          <div className="flex">
              <label className='dplabel'>All Day</label>
              <input 
                 className="dpradio" 
                 type="radio" 
                checked={radio === "days"}
                value="days"
                onChange={(e)=>{setRadio(e.target.value)}}
                 />
          </div>
          <div className="flex">
              <input className="dpinput" type="text" placeholder= "From" />
              <input className="dpinput" type="text" placeholder= "To" />
          </div>
          <button className="save" type="submit">Save</button>
        </form>
      </div>
    );
  }


  
