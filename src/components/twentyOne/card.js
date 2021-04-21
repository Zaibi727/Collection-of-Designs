import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="wrapper">
               <section className="left">
                   <div className="left-div-1">
                       <h3>Company info</h3>
                       <button>Edit</button>
                   </div>
                   <div className="left-div-2">
                       <div className="left-div-2-sub">
                           <i class="fa fa-joomla"></i>
                           <div>
                               <h4>Beer pub</h4>
                               <p className="gray">Business name</p>
                           </div>
                       </div>

                       <div className="left-div-2-sub">
                       <i class="fa fa-map-marker"></i>
                           <div>
                           <h4>United States, Pasadena 2232<br></br> Avondale Ave undefined</h4>
                               <p className="gray">Full address</p>
                           </div>
                       </div>

                       <div className="left-div-2-sub">
                       <i class="fa fa-file"></i>
                           <div>
                               <h4>3823340092</h4>
                               <p className="gray">VAT number</p>
                           </div>
                       </div>
                   </div>
               </section>

               {/*--section-left--*/}

               <section className="middle">
                  <h3>Wallet</h3>
                  <div className="middle-sub">
                  <i class="fa fa-dollar"></i>
                       <p>
                          It's mandatory for a business to open a wallet<br></br> here in the SQUARE ecosystem to start
                      </p>
                      <button>
                          Create new account
                      </button>
                  </div>
               </section>

               {/*--section-middle--*/}

               <section className="right">
                   <div className="left-div-1">
                       <h3>Source</h3>
                       <button>Edit</button>
                   </div>

                 <div className="right-div-2">
                     <div className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                               <img className="src-img-log" src="/images/mastercard.png" />
                                 <div>
                                    <h4>*****394</h4>
                                    <p className="gray">Name Surname</p>
                               </div>
                         </div>
                         <button>
                            <i class="fa fa-check"></i>
                         </button>
                     </div>

                     <div className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                             <img className="src-img-log" src="/images/visa.png" />
                              <div>
                                <h4>******1214</h4>
                                <p className="gray">Name Surname</p>
                             </div>
                         </div>
                     </div>

                     <div id="border-remove" className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                             <img className="src-img-log" src="/images/paypal.webp" />
                             <div>
                                 <h4>   
                                Add PayPal account
                                </h4>
                             </div>
                         </div>
                     </div>

                 </div>
               </section>
            </div>
         );
    }
}
 
export default Card;