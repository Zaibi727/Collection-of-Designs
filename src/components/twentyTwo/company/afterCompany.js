import React, { Component } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiFileList3Line } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import './company.css';


class Afterc extends Component { 
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);

      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return ( 
            <div>
                <section className="left">
                   <div className="left-div-1">
                       <h3>Company info</h3>
                       <button className="save" onClick={this.props.onClick}>Save</button>
                   </div>
                   <div className="left-div-2">
                       <div id="aftr-input" className="left-div-2-sub">
                       <MdBusinessCenter className="iconc" />
                           <div>
                               <input className="larg"  value="Beer pub srl"  type="text"  onChange={this.handleChange} />
                           </div>
                       </div>

                       <div id="aftr-input" className="left-div-2-sub">
                       <HiOutlineLocationMarker className="iconc" />
                           <div>
                           <input className="larg" value="Via Americo Vespucci, 14" onChange={this.handleChange} /><br></br>
                           <input className="sm" value="20124"  onChange={this.handleChange}  /> <input className="sm" value="Milano"   onChange={this.handleChange} /> 
                           <select className="select">
                               <option value="IT">ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                               <option>ITA</option>
                           </select>
                           </div>
                       </div>

                       <div id="aftr-input" className="left-div-2-sub">
                       <RiFileList3Line className="iconc" />
                           <div>
                               <input className="larg" type="text" value="382340092"   onChange={this.handleChange} />
                           </div>
                       </div>
                   </div>
               </section>
            </div>
         );
    }
}
 
export default Afterc;
