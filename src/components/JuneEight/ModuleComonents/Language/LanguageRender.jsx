import React, { Component } from 'react';
import LanguageEdit from './LanguageEdit';
import LanguageSave from './LanguageSave';


class LanguageRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            value: '',
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
      }
    
      handleEditClick() {
        this.setState({ clicked: true});
      }
    
      handleSaveClick() {
        this.setState({ clicked: false});
      }

      handleChange = ( value ) => {
        this.setState({ value: value });
   }

      
    render() {
        const clicked = this.state.clicked;

        let button;
        
        if (clicked) {
          button = <LanguageSave onChange = {this.handleChange}  onClick={this.handleSaveClick} />;
        } else {
          button = <LanguageEdit  value = {this.state.value} onClick={this.handleEditClick} />;
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

export default LanguageRender;

