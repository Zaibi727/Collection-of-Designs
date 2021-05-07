import React from 'react';
import EditEnglish from './editEnglish';
import SaveEnglish from './saveEnglish'; 

class EnglishRender extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
      }
    
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    render() { 

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <SaveEnglish onClick={this.handleLogoutClick} />;
        } else {
          button = <EditEnglish onClick={this.handleLoginClick} />;
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
 
export default EnglishRender;