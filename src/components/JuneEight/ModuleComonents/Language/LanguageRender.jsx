import React, { Component } from 'react';
import Select from 'react-select';
import ButtonAb from '../../ButtonAb';
import styles from './language.module.css';


class LanguageRender extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            selectedOption: '',
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

      handleChange =  (selectedOption) =>  {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };

      
    render() {

        const languageOptions = [
            { value: 'en', label: 'English' },
            { value: 'ur', label: 'Urdu' },
            { value: 'pa', label: 'Pashtu' },
            { value: 'ar', label: 'Arabic' },
            { value: 'si', label: 'Sindhi' },
            { value: 'ba', label: 'Balochi' },
            { value: 'pu', label: 'Punjabi' },
         
          ];

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
        const  selectedOption  = this.state.selectedOption;

        let button;
        
        if (clicked) {
          button = <section className={styles.langague}>
              <div>
                       <Select
                           className={styles.lag}
                             onChange={this.handleChange}
                             options={languageOptions}
                            styles={style}
                             components={{
                             IndicatorSeparator: () => null
                                 }}
                        />
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
                          <p className={styles.p1}>{selectedOption}</p>
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

 