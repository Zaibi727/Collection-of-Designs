import React, { Component } from 'react';
import Beforc from './beforCompany';
import Afterc from './afterCompany';

class Companyr extends Component {

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
            button = <Afterc onClick={this.handleLogoutClick} />;
        } else { 
          button = <Beforc onClick={this.handleLoginClick} />;
        }

        return ( 
             <div>
                {button}
             </div>
         );
    }
}
 
export default Companyr;



 
  