import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { GiHamburgerMenu } from "react-icons/gi";


class SocialPlayer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div>
                    <i><GiHamburgerMenu /></i>
                    <img src="./images/youtube.png" />
                </div>

                <div>
                    <input />
                    <h2></h2>
                </div>
                     
                <div>
                    <h4>video icon</h4>
                    <h4>squre icon</h4>
                    <h4>bell icon</h4>
                    <h4>Account pic</h4>
                </div>
            </div>
         );
    }
}
 
export default SocialPlayer;