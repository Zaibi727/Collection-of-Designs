import React,{Component} from 'react';
import ButtonBr from './ButtonBr';
import ContentBar from './ContentBar';
import styles from './junenine.module.css';


class JuneNineContainer extends Component {
    constructor(props) {
      super(props);
     
      this.state = { 
          open: false,
          
       };

       this.wrapperRef = React.createRef();
       this.OneClick = this.OneClick.bind(this);    
       this.OutsideOne = this.OutsideOne.bind(this);
     
  }
  
  
  OneClick = (key) => {
      this.setState(state => {
        return {
          open: !state.open, 
        };
      });
    };
 
    

  
    componentDidMount() {
      document.removeEventListener("mousedown", this.OutsideOne);

  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.OutsideOne);

  }
  
  OutsideOne = event => {
      if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
        this.setState({
          open: false,
        });
      }
    };


render(){
    return (
        <div className={styles.container} ref={this.wrapperRef}>
            <div className={styles.containerDiv1}>
                <ButtonBr 
                    onAddOne={this.OneClick}
                    open={this.state.open}
        
                />
            </div>
            <div className={styles.containerDiv2}>
                <ContentBar 
                    open={this.state.open}
                    selected={this.state.selected}
              
                />
            </div>
        </div>
    )
}
}
export default JuneNineContainer;
