import React from 'react';
import './source.css';


class Afters extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
    return (
        <div>
              <section className="right">
                   <div className="after-div-1">
                       <p className="h3">Sources</p>
                       <div>
                          <button className="add-new-btn">Add new</button>
                          <button className="save-btn" onClick={this.props.onClick}>Save</button>
                       </div>
                   </div>

                 <div className="right-div-2">
                     <label className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                               <img className="src-img-log" src="/images/mastercard.png" />
                                 <div>
                                    <p className="h4">*****394</p>
                                    <p className="gray">Name Surname</p>
                               </div>
                         </div>
                          <input 
                             type="radio"
                             name="radio"

                            />
                     </label>

                     <label className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                             <img className="src-img-log" src="/images/visa.png" />
                              <div>
                                <p className="h4">******1214</p>
                                <p className="gray">Name Surname</p>
                             </div>
                         </div>
                         <input 
                             type="radio" 
                             name="radio"
                            
                            />
                     </label>

                     <label id="border-remove" className="right-div-2-sub">
                         <div className="right-div-2-sub-1">
                             <img className="src-img-log" src="/images/paypal.webp" />
                             <div>
                                 <p className="h4">   
                                email@gmail.com
                                </p>
                             </div>
                         </div>
                         <input 
                             type="radio" 
                             name="radio"
                             
                            />
                     </label>

                 </div>
               </section>
        </div>
    )
}
}

export default Afters;