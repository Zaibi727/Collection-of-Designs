import React from 'react';
import './wallet.css';
import { IoWalletOutline } from "react-icons/io5"


function Beforw (props) {
        return ( 
            <div>
                
               <section className="middle">
                  <h3>Wallet</h3>
                  <div className="middle-sub">
                  <IoWalletOutline className="iconw" />
                       <p>
                          It's mandatory for a business to open a wallet<br></br> here in the SQUARE ecosystem to start
                      </p>
                      <button onClick={props.onClick}>
                          Create new account
                      </button>
                  </div>
               </section>

            </div>
         );
    }
 
export default Beforw;