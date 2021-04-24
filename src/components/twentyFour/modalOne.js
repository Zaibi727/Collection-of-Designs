import React,{useState} from 'react';
import { IoWalletOutline } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { RiCoinLine } from "react-icons/ri";
import { BiCoinStack } from "react-icons/bi";
import Modal from 'react-modal';
import Select from 'react-select';
import CreditCardInput from 'react-credit-card-input';
import './modal.css';


function Modalf () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalIsOpeen, setModalIsOpeen] = useState(false);
    return (
        <div className="wrapper">
               <button className="edit-btnnn" onClick={()=> setModalIsOpen(true)}>
                   Edit amount detial
               </button>
               <button className="edit-btnnn" onClick={()=> setModalIsOpeen(true)}>
                   Add new source
               </button>

               {/*--below first modal--*/}

              <Modal className="modal-wrapper" isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                    <div className="modal-first-div">
                        <IoWalletOutline className="iconw" />
                        <p className="div-1-p1">Top up the balance</p>
                        <p className="div-1-p2">
                            Running out of juice to access the useful<br></br>
                            SQUARE features? Take action now.
                        </p>
                    </div>

                    <form>
                        <label className="label-one">
                            <div className="lable-1-div-1">
                            <RiCoinLine className="label-icon" />
                                <div>
                                    <p className="label-p1">$250,00</p>
                                    <p className="label-p2">+ $0,60 transfer fee</p>
                                </div>
                            </div>
                            <input className="circle-radio" type="radio" name="radio" />
                        </label>

                        <label  className="label-one">
                            <div className="lable-1-div-1">
                            <BiCoinStack className="label-icon"/>
                                <div>
                                    <p className="label-p1">$500,00</p>
                                    <p className="label-p2">+ $0,60 transfer fee</p>
                                </div>
                            </div>
                            <input className="circle-radio" type="radio" name="radio" />
                        </label>

                        <label className="label-one">
                            <div className="lable-1-div-1">
                            <BiCoinStack  className="label-icon"/>
                                <div>
                                    <p className="label-p1">$1000,00</p>
                                    <p className="label-p2">+ $0,60 transfer fee</p>
                                </div>
                            </div>
                            <input className="circle-radio" type="radio" name="radio" />
                        </label>

                        <label id="label-btom-bdr" className="label-one">
                            <div className="lable-1-div-1">
                            <BiCoinStack id="doubel-icon" className="label-icon"/><BiCoinStack id="double-icon-right" className="label-icon"/>
                                <div>
                                    <p className="label-p1">$5,000,00</p>
                                    <p className="label-p2">+ $0,60 transfer fee</p>
                                </div>
                            </div>
                            <input className="circle-radio" type="radio" name="radio" />
                        </label>

                        <label className="last-label">
                            <p>Or enter amount</p>
                            <input type="text" required/>
                        </label><br></br>
                        <button className="done-btn" type="submit">
                            Done
                        </button>
                    </form>

                    <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpen(false)}>
                    <ImCross />
                   </button>
              </Modal>

              {/*--below-second modal--*/}

              <Modal className="modal-wrapper" isOpen={modalIsOpeen} onRequestClose={()=> setModalIsOpeen(false)}>
                   <div className="modal-first-div">
                        <IoWalletOutline className="iconw" />
                        <p className="div-1-p1">Add new source</p>
                        <p className="div-1-p2">
                            Running out of juice to access the useful<br></br>
                            perks around you? Here's the solution.
                        </p>
                    </div>
                     
                     <form className="form-2">
                         
                         <div>
                         <label className="modal-2-label-1">Source type</label><br></br>
                          <Select className="modal-2-select"
                           options={stateOptions}
                           placeholder=""
                          />
                         </div>
                           
                           <div>
                           <label className="modal-2-label-1">Card holder</label><br></br>
                               <input className="select" type="text" required />
                           </div>

                           <div>
                           <label id="carnm" className="modal-2-label-1">Card number</label>
                              <CreditCardInput
                                  className="creditcard"
                                  
                              />
                           </div>

                           <button className="modal-2-submit" type="submit">
                               Add new source
                           </button>

                     </form>


                   <button className="modal-edit-adress-cancel-btn" onClick={()=> setModalIsOpeen(false)}>
                      <ImCross />
                   </button>
              </Modal>
        </div>
    )
}

export default Modalf;


const stateOptions = [
    {label: 'debit card'},
    {label: 'credit card'},
    {label: 'debit card'},
    {label: 'debitcard'},
]