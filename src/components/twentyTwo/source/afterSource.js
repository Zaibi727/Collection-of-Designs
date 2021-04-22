import React from 'react';
import './source.css';


function Afters (props) {
    return (
        <div>
              <section className="right">
                   <div className="after-div-1">
                       <h2>Sources</h2>
                       <div>
                          <button className="add-new-btn">Add new</button>
                          <button className="save-btn" onClick={props.onClick}>Save</button>
                       </div>
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
                          <input type="radio" />
                     </div>

                     <div className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                             <img className="src-img-log" src="/images/visa.png" />
                              <div>
                                <h4>******1214</h4>
                                <p className="gray">Name Surname</p>
                             </div>
                         </div>
                         <input type="radio" />
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
                         <input type="radio" />
                     </div>

                 </div>
               </section>
        </div>
    )
}

export default Afters;