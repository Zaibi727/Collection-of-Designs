import React from 'react';
import './source.css';


function Befores (props) {
    return (
        <div>
              <section className="right">
                   <div className="left-div-1">
                       <h3>Source</h3>
                       <button onClick={props.onClick}>Edit</button>
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
    )
}

export default Befores;
