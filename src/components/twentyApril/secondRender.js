import React, { Component } from 'react';
import Second from './secondSelector';
import updatedIcon from './iconDrop';


class Two extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: updatedIcon
         };
    }
    render() {
        const { data } = this.state;
        return (
            <Second
            options={data}
             />
        );
    }
}

export default Two;