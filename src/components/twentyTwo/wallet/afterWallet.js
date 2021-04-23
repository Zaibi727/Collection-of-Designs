import React from 'react';
import './wallet.css';
import { AiOutlineSetting } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';




function Afterw (props) {
    return ( 
        <div>
            
           <section className="middle">
              <div className="mid-after-one-div">
                  
                  <div>
                     <h3>Wallet</h3>
                  </div>
                  <div>
                     <Menu className="af-btn" menuButton={
                       <button className="dp-btn">
                           <span> <AiOutlineSetting /></span>  
                           <span> <BiCaretDown/></span>
                       </button>}>
                       <MenuItem>Manage limits</MenuItem>
                       <MenuItem>Edit info</MenuItem>
                    </Menu>
                  </div>
                 
              </div>
              <div className="middle-after-sub">
                  <div className="one-af">
                      <h2>$ 450.00</h2>
                      <p>Actial balance</p>
                  </div>
                  <div className="two-af">
                      <p><span className="red">$500.00</span> will be charged in 24.06.2020.</p>
                      <p>Please, take action now</p>
                  </div>
                       <div className="three-af">
                       <button>Withdraw funds</button>
                       <button className="bbb" onClick={props.onClick}>Top up</button>
                       </div>
                  </div>
           </section>

        </div>
     );
}

export default Afterw;