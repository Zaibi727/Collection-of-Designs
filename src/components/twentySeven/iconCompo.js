import React, { Component } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';


class IconCompo extends Component {
    state = {  }
    render(props) { 
        const {icon} = {...props}
        return ( 
            <div>
                   <AiOutlineEyeInvisible />
            </div>
         );
    }
}
 
export default IconCompo;