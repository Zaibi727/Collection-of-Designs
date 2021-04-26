import React, { Component } from 'react';
import CardOne from './oneCard';

class Pab extends Component {
    constructor(props) {
        super(props);
        this.state = [
             {image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fglobal-uploads.webflow.com%2F5ef5480befd392489dacf544%2F5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image.jpeg&imgrefurl=https%3A%2F%2Fwww.starrez.com%2Fcustomers%2Fboarding-school-housing-software-spotlight-img-academy&tbnid=5530Y_OS84MS7M&vet=12ahUKEwi-8riRxJvwAhUIKhoKHU_ZCIAQMygDegUIARCrAQ..i&docid=nqVZXKmSYHoPEM&w=1600&h=668&q=img&safe=active&ved=2ahUKEwi-8riRxJvwAhUIKhoKHU_ZCIAQMygDegUIARCrAQ'},   
        ]
      };

    render() { 


        return ( 
            <div>
               <CardOne />
            </div>
         );
    }
}
 
export default Pab;


