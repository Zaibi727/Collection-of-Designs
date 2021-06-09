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

    handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
      
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
        const { selectedOption } = this.state;

        let button;
        
        if (clicked) {
          button = <section className={styles.langague}>
              <div>
                    <Select 
                    className={styles.simpSelect} 
                    placeholder="Select a language"
                    options={options} 
                    styles={style}
                    value={selectedOption}
                    onChange={(e) => this.handleChange(e.value)}
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

 
const options = [
    { value: 'English', label: 'Englsih' },
    { value: 'Urdu', label: 'Urdu' },
    { value: 'French', label: 'French' },
    { value: 'Punjab', label: 'Punjabi' },
    { value: 'Pashtu', label: 'Pashtu' },
    { value: 'Arabic', label: 'Arabi' },
  ]