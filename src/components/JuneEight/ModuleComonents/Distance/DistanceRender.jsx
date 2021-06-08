import React, { Component } from 'react';
import DistanceEdit from './DistanceEdit';
import DistanceSave from './DistanceSave';


class DistanceRender extends Component {
    constructor(props) {
        super(props);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
        this.state = {clicked: false};
      }
    
      handleEditClick() {
        this.setState({ clicked: true});
      }
    
      handleSaveClick() {
        this.setState({ clicked: false});
      }

      
    render() {

        const clicked = this.state.clicked;
        let button;
        if (clicked) {
          button = <DistanceSave onClick={this.handleSaveClick} />;
        } else {
          button = <DistanceEdit onClick={this.handleEditClick} />;
        }

        return (
            <div>
              <div>
                {button}
             </div>
            </div>
        );
    }
}

export default DistanceRender;
