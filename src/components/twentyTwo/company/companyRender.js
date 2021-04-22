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
          button = <Beforc onClick={this.handleLogoutClick} />;
        } else {
          button = <Afterc onClick={this.handleLoginClick} />;
        }

        return ( 
             <div>
                <Main isLoggedIn={isLoggedIn} />
                {button}
             </div>
         );
    }
}
 
export default Companyr;

function UserGreeting(props) {
    return <h1></h1>;
  }
  
  function GuestGreeting(props) {
    return <h1></h1>;
  }

  function Main(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  