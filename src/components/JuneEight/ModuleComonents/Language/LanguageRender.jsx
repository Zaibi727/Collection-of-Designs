import React, { Component } from 'react';
import Select from 'react-select';
import ButtonAb from '../../ButtonAb';
import styles from './language.module.css';



class LanguageRender extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            selectedOption: null,
        };

        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleSaveClick = this.handleSaveClick.bind(this);
      }
    
      handleEditClick() {
        this.setState({ clicked: true});
      }
    
      handleSaveClick() {
        this.setState({ clicked: false});
      }

      handleChange = (event) => {
        console.log("Event.target.value is", event.target.value);
      
      this.setState({selectedOption:event.target.value});
    }
      
    render() {

        const style = {
            control: base => ({
              ...base,
              border: 0,
              // This line disable the blue border
              boxShadow: "none",
              width: '100%',
              
            })
          };

        const clicked = this.state.clicked;

        let button;
        
        if (clicked) {
          button = <section className={styles.langague}>
              <div>
                       <select className={styles.simpSelect} value={this.state.selectedOption} onChange={this.handleChange}>
                      <option value={"English"}>English</option>
                       <option value={"Urdu"}>Urdu</option>
                       <option value={"Punjabi"}>Punjabi</option>
                      <option value={"Pashtu"}>Pashtu</option>
                       <option value={"Arabic"}>Arabic</option>
                        <option value={"Sindhi"}>Sindhi</option>
                    </select>
            </div>
            <div onClick={this.handleSaveClick}>
                <ButtonAb 
                    label="Save"
                />
            </div>

                  </section>;
        } else {
          button = <section className={styles.langague}  >
                        <div>
                          <p className={styles.p1}>{this.state.selectedOption}</p>
                          <p className={styles.p2}>Language</p>
                        </div>
                        <div onClick={this.handleEditClick}>
                            <ButtonAb 
                            label="Edit"
                               />
                         </div>
                  </section>;
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

export default LanguageRender;

 