import React,{Component} from 'react';
import ButtonBr from './ButtonBr';
import ContentBar from './ContentBar';
import styles from './junenine.module.css';


class JuneNineContainer extends Component {
    constructor(props) {
      super(props);
     
      this.state = { 
          open: false,
          opeen: false,
          opeeen: false,
          opeeeen: false,
          
       };
       this.wrapperRef = React.createRef();
       this.OneClick = this.OneClick.bind(this);
       this.TwoClick = this.TwoClick.bind(this);
       this.ThreeClick = this.ThreeClick.bind(this);
       this.FourClick = this.FourClick.bind(this);
       
       this.OutsideOne = this.OutsideOne.bind(this);
       this.OutsideTwo = this.OutsideTwo.bind(this);
       this.OutsideThree = this.OutsideThree.bind(this);
       this.OutsideFour = this.OutsideFour.bind(this);
     
  }
  
  
  OneClick = () => {
      this.setState(state => {
        return {
          open: !state.open, 
          opeen: false,  
          opeeen: false, 
          opeeeen: false ,

        };
      });
    };
    TwoClick = () => {
      this.setState(state => {
        return {
          opeen: !state.opeen, 
          open: false,  
          opeeen: false, 
          opeeeen: false ,  
        };
      });
    };
    ThreeClick = () => {
      this.setState(state => {
        return {
          opeeen: !state.opeeen, 
          open: false,  
          opeen: false, 
          opeeeen: false ,  
        };
      });
    };
    FourClick = () => {
      this.setState(state => {
        return {
          opeeeen: !state.opeeeen,   
          open: false,  
          opeen: false, 
          opeeen: false ,
        };
      });
    };
    

  
    componentDidMount() {
      document.removeEventListener("mousedown", this.OutsideOne);
    document.removeEventListener("mousedown", this.OutsideTwo);
    document.removeEventListener("mousedown", this.OutsideThree);
    document.removeEventListener("mousedown", this.OutsideFour);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.OutsideOne);
    document.removeEventListener("mousedown", this.OutsideTwo);
    document.removeEventListener("mousedown", this.OutsideThree);
    document.removeEventListener("mousedown", this.OutsideFour);
  }
  
  OutsideOne = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    };
  OutsideTwo = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          opeen: false,
        });
      }
    };
    OutsideThree = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          opeeen: false,
        });
      }
    };
    OutsideFour = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          opeeeen: false,
        });
      }
    };

render(){
    return (
        <div className={styles.container} ref={this.wrapperRef}>
            <div className={styles.containerDiv1}>
                <ButtonBr 
                    onAddOne={this.OneClick}
                    onAddTwo={this.TwoClick}
                    onAddThree={this.ThreeClick}
                    onAddFour={this.FourClick}
                    open={this.state.open}
                    opeen={this.state.opeen}
                    opeeen={this.state.opeeen}
                    opeeeen={this.state.opeeeen}
        
                />
            </div>
            <div className={styles.containerDiv2}>
                <ContentBar 
                    open={this.state.open}
                    opeen={this.state.opeen}
                    opeeen={this.state.opeeen}
                    opeeeen={this.state.opeeeen}
              
                />
            </div>
        </div>
    )
}
}
export default JuneNineContainer;
