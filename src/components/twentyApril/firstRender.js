import React, { Component } from 'react';
import Tuesday from './firstSelector';
import updatedCountries from './flags';


class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: updatedCountries
        };

    }

    render() { 
       const { data } = this.state;

        return ( 
            <div>
                <Tuesday  
                    options={data}
                />
            </div>
         );
    }
}
 
export default Test;


