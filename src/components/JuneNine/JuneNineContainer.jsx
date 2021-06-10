import React,{Component} from 'react';
import styles from './junenine.module.css';
import datas from './cardData';
//import AbButton from '../twentyMay/abButton';
import AbCard from './AbCard'
import AbCardContent from './AbCardContent';


class JuneNineContainer extends Component {
    constructor(props) {
      super(props);
     
      this.state = { 
          open: false,
          selected: '',
          
       };

       this.wrapperRef = React.createRef();
       this.OneClick = this.OneClick.bind(this);    
       this.OutsideOne = this.OutsideOne.bind(this);
     
  }
  
  
  OneClick = (key) => {
      this.setState(state => {
        return {
          open: !state.open, 
          selected: key,
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
          selected: '',
        });
      }
    };


render(){
    return (
        <div className={styles.container} ref={this.wrapperRef}>
             {datas.map((data, i) => {
               return(
                <div className={styles.wrapper} key={i}>
                   <div className={styles.buttonportion} onClick={() => this.OneClick(i)}>
                      <p>{data.Icon}</p>
                      <p>{data.label}</p>
                   </div>

                 {data.cardContent ? data.cardContent.map((c) => 
                              <div className={styles.cardPortion}>  
                              {this.state.open && this.state.selected === i && (
                                <AbCard>                
                                   <AbCardContent 
                                     c={c}
                                   />
                                </AbCard>
                              )}
                              </div>                       
                            ) : null } 

               </div>
               )})}
              
        </div>
    )
}
}
export default JuneNineContainer;
