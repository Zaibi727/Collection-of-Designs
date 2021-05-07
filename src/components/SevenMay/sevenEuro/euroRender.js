import React from 'react';
import EditEuro from './editEuro';
import SaveEuro from './saveEuro'; 

class EuroRender extends React.Component {
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
          button = <SaveEuro onClick={this.handleLogoutClick} />;
        } else {
          button = <EditEuro onClick={this.handleLoginClick} />;
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
 
export default EuroRender;