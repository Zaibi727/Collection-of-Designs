import React, { Component } from 'react';
import CurrencyEdit from './CurrencyEdit';
import CurrencySave from './CurrencySave';


class CurrencyRender extends Component {
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
          button = <CurrencySave onClick={this.handleSaveClick} />;
        } else {
          button = <CurrencyEdit onClick={this.handleEditClick} />;
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

export default CurrencyRender;
