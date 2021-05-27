import React from 'react';
import styles from './twentySevenMay.module.css';
import { GiHamburgerMenu  } from "react-icons/gi";
import { green } from '@material-ui/core/colors';

class TwentySevenMayContainer extends React.Component{

    constructor(props) {
        super(props);
       
        this.state = { 
            open: false,
            opene: false,
            bgColor: "",
         };

    }


    handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
            bgColor: "lightgreen"
          };
        });
      };

      handleRButtonClick = () => {
        this.setState(state => {
          return {
            opene: !state.opene,
            bgColor: "lightgreen"
          };
        });
      };

      container = React.createRef();

      componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        document.addEventListener("mousedown", this.handleRClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
      document.addEventListener("mousedown", this.handleRClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };

      handleRClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            opene: false,
          });
        }
      };


    render(){
   
      let mainStyle = {
        marginLeft: '0%',
        marginRight: '0%',
    }
    if(this.state.open || this.state.opene ) {
        mainStyle={
            marginLeft: '30%',
            marginRight: '30%',
        } 
    }

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.left} style={{backgroundColor: this.state.bgColor}}>
                    <button className={styles.btnLeft} onClick={this.handleButtonClick} ><GiHamburgerMenu /></button>

                    {this.state.open && (
                        <div className={styles.leftAside}>
                             <h4>Left header</h4> 
                                     
                            <aside>
                               <h4>Left Content</h4>
                               <p>
                               Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                                Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                               </p>
                           </aside>
                             </div>
                     )}
                </div>

                <h4>Main header</h4>

                <div className={styles.right} style={{backgroundColor: this.state.bgColor}}>
                    <button className={styles.btnRight} onClick={this.handleRButtonClick}>  <GiHamburgerMenu />  </button>
                    {this.state.opene && (  
                             <div className={styles.rightAside}>
                             <h4>Right header</h4> 
                                     
                             <aside>
                               <h4>Right Content</h4> 
                               <p>
                               Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                                Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                               </p>
                           </aside>
                             </div>
                     )}
                </div>
            </header>
     
            <main className={styles.main} style={mainStyle}>
                <h4>Main Content</h4>
                <br></br>
                <p>
                     Nam accumsan eleifend metus at imperdiet. Mauris pellentesque ipsum nisi, et fringilla leo blandit sed. In tempor, leo sit amet fringilla imperdiet, ipsum enim sagittis sem, non molestie nisi purus consequat sapien. Proin at velit id elit tincidunt iaculis ac ac libero. Vivamus vitae tincidunt ex. Duis sit amet lacinia massa. Quisque lobortis tincidunt metus ut commodo. Sed euismod quam gravida condimentum commodo.
                </p>
                <p>
                    Vivamus tincidunt risus ut sapien tincidunt, ac fermentum libero dapibus. Duis accumsan enim ac magna tempor, vestibulum euismod nisl pharetra. Ut dictum lacus eu venenatis vestibulum. Vestibulum euismod at arcu ac blandit. Curabitur eu imperdiet magna. Duis bibendum efficitur diam, eget placerat nunc imperdiet eget. Morbi porta at leo sed porta. Nullam eleifend eleifend quam eget dictum.
                </p>
                <p>
                    Sed nulla erat, lacinia sit amet dui at, cursus blandit neque. In ultricies, dui a laoreet dignissim, risus mi cursus risus, at luctus sem arcu non tortor. In hac habitasse platea dictumst. Etiam ut vulputate augue. Aenean efficitur commodo ipsum, in aliquet arcu blandit non. Praesent sed tempus dui, non eleifend nisi. Proin non finibus diam, quis finibus ante. Fusce aliquam faucibus mauris, id consequat velit ultricies at. Aliquam neque erat, fermentum non aliquam id, mattis nec justo. Nullam eget suscipit lectus.
                </p>
            </main>

        </div>
    )
}
}

export default  TwentySevenMayContainer;
