import React from 'react';
import './wallet.css';


function Beforw (props) {
        return ( 
            <div>
                
               <section className="middle">
                  <h3>Wallet</h3>
                  <div className="middle-sub">
                  <i class="fa fa-dollar"></i>
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