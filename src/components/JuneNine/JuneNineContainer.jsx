import React,{Component} from 'react';
import ButtonBr from './ButtonBr';
import ContentBar from './ContentBar';
import styles from './junenine.module.css';


class JuneNineContainer extends Component {
    constructor(props) {
      super(props);
     
      this.state = { 
          open: false,
          selected:'',
          
       };
  
       this.handleButtonOneClick = this.handleButtonOneClick.bind(this);
       this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  
  
  handleButtonOneClick = (key) => {
      this.setState(state => {
        return {
          open: !state.open,
          selected: key,     
        };
      });
    };
    
    container = React.createRef();
  
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  
  handleClickOutside = event => {
      if (this.container.current && !this.container.current.contains(event.target)) {
        this.setState({
          open: false,
         selected: '',
        });
      }
    };

render(){
    return (
        <div className={styles.container} ref={this.container}>
            <div className={styles.containerDiv1}>
                <ButtonBr 
                    onAdd={this.handleButtonOneClick}
                    open={this.state.open}
                    selected={this.state.selected}
                />
            </div>
            <div className={styles.containerDiv2}>
                <ContentBar 
                    Clicked={this.state.open}
              
                />
            </div>
        </div>
    )
}
}
export default JuneNineContainer;
