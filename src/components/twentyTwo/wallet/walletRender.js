import React from 'react';
import Beforew from './beforWallet';
import Afterw from './afterWallet';

class Walletr extends React.Component {
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
          button = <Afterw onClick={this.handleLogoutClick} />;
        } else {
          button = <Beforew onClick={this.handleLoginClick} />;
        }


        return ( 
            <div>
            <div>
                <Main isLoggedIn={isLoggedIn} />
                {button}
             </div>
            </div>
         );
    }
}
 
export default Walletr;

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