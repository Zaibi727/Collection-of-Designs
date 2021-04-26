import React, { Component } from 'react';
import './cardOne.css';
import  Button from './btnBoot';
import {FaEnvelope } from "react-icons/fa";
import {FaFacebookF } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import {FaSnapchatGhost } from "react-icons/fa";
import {MdKeyboardArrowDown  } from "react-icons/md";
import {FaPhoneAlt  } from "react-icons/fa";



function CardOne (){ 
        return ( <div className="wwwraper">
            <div className="wrapper-card-six">
                <div className="div-1">
                    <img src='/images/profile.jpg' />
                    <div className="div-1-1">
                        <p className="name">Arlene Steward</p>
                        <p className="location">United States</p>
                    </div>
                    <div className="div-1-2">
                        <ul>
                            <li><button className="social-btns"><FaPhoneAlt/></button></li>
                            <li><button className="social-btns"><FaEnvelope/></button></li>
                            <li><button className="social-btns"><FaFacebookF /></button></li>
                            <li><button className="social-btns"><FaInstagram /></button></li>
                            <li><button className="social-btns"><FaSnapchatGhost /></button></li>
                            <li><button className="social-btns"><MdKeyboardArrowDown /></button></li>
                        </ul>
                    </div>
                </div>

                {/*--first-card--*/}

                <section className="part-2">
                    <div className="part-2-detial">
                        <p className="detial-p1">Blogger</p>
                        <p className="detial-p2">Profession</p>
                    </div>

                    <div className="part-2-detial">
                        <p className="detial-p1"> Content creator, Modal, Singer</p>
                        <p className="detial-p2" >Further experiences</p>
                    </div>

                    <div className="part-2-detial">
                        <p className="detial-p1">Fahion</p>
                        <p className="detial-p2">Main speciality</p>
                    </div>

                    <div className="part-2-detial">
                        <p className="detial-p1">Art & Design, Gaming, Health & Well...</p>
                        <p className="detial-p2">Additional interests</p>
                    </div>
                </section>

                {/*--second-portion--*/}

                <div className="last-div-btn">
                   <Button type="light" title="Reject" />
                   <Button type="dark" title="Accept" />
                </div>
            </div>
            </div>
         );
    }
 
export default CardOne;