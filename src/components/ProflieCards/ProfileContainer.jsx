import React, { Component } from 'react';
import styles from './ProfileCards.module.css';
import ProfileData from './ProfileData';
import { BsDot } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";




class ProfileContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,	

		};

		this.OneClick = this.OneClick.bind(this);
		this.OutsideOne = this.OutsideOne.bind(this);
	}


	OneClick = (id) => {
		this.setState({ selected: id });
	};

	container = React.createRef();

	componentDidMount() {
		document.addEventListener('mousedown', this.OutsideOne);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.OutsideOne);
	}

	OutsideOne = event => {
		if (this.container.current && !this.container.current.contains(event.target)) {
			this.setState({
				selected: null,
			});
		}
	};


	render() {
			return (
                <div className={styles.wholeWrapper}>
                <div className={styles.wrapper}>
                  <p className={styles.p1}>12:00 - 15:00 <BsDot /> <span><FiUsers /> 8</span></p>
                  <div className={styles.btnPanelWrapper}>
                <div className={styles.buttonPanel}>        
                {ProfileData.map((data, index) => (
                        <div  key={index} className={styles.btnrow}>
                            <div className={styles.buttonPanel} onClick={() => this.OneClick(data.id)} >
                                <div onClick={() => this.OneClick(data.id)} style={{ fontWeight: data.id === this.state.selected ? '700' : '400' }}>
                                   <img className={styles.img} src={data.image}  style={{border: data.id === this.state.selected ? '1px solid black' : 'none', padding: data.id === this.state.selected ? '2px' : '0px'}}/>                               
                                   <div>
                                      <p className={styles.name} style={{ color: data.id === this.state.selected ? 'black' : 'gray' }}>{data.name}</p>
                                      <span className={styles.reddot}>{data.Iconone}</span>
                                   </div>        
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
                </div>
                </div>
                </div>
            );
	}
}

export default ProfileContainer;
