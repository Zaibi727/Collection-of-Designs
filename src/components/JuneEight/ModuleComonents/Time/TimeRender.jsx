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
        this.setState({ selectedOption: selectedOption});
        console.log(`Option selected:`, selectedOption);
      };
      
    render() {

        const style = {
            control: base => ({
              ...base,
              border: 0,
              // This line disable the blue border
              boxShadow: "2px 2px 5px gray",
              width: '100%',
              
            })
          };

        const clicked = this.state.clicked;
        const { selectedOption } = this.state;

        let button;
        
        if (clicked) {
          button = <section className={styles.langague}>
              <div>
              <label>Select your time:</label>
              <Select 
                    className={styles.simpSelect} 
                    placeholder={selectedOption}
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
                          <p className={styles.p1}>{selectedOption}</p>
                          <p className={styles.p2}>Time settings</p>
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
  { value: '2:00 am', label: '2:00 am' },
  { value: '4:00 pm', label: '4:00 pm' },
  { value: '12:00 am', label: '12:00 am' },
  { value: '1:30 am', label: '1:30 am' },
]