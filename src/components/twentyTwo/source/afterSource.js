import React from 'react';
import './source.css';


class Afters extends React.Component {
    constructor(props){
        super(props);


        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state= {checked: false};
    }


    
    onChange() {
        this.setState({ checked: !this.state.checked });
        console.log('onChange');
      }
    
      onClick() {
        this.onChange();
        console.log('onClick');
      }


    
    render(){
    return (
        <div>
              <section className="right">
                   <div className="after-div-1">
                       <h2>Sources</h2>
                       <div>
                          <button className="add-new-btn">Add new</button>
                          <button className="save-btn" onClick={this.props.onClick}>Save</button>
                       </div>
                   </div>

                 <div className="right-div-2">
                     <div className="right-div-2-sub" onClick={this.onClick}>
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
                     </div>

                     <div className="right-div-2-sub" onClick={this.onClick}>
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
                     </div>

                     <div id="border-remove" className="right-div-2-sub" onClick={this.onClick}>
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
                     </div>

                 </div>
               </section>
        </div>
    )
}
}

export default Afters;