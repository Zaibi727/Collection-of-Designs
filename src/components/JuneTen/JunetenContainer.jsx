import React, { Component } from 'react';
import styles from './juneten.module.css';
import AbCard from './AbstractCard';
import AbCardContent from './AbCardContent';

import { FaSuitcase } from 'react-icons/fa';
import { IoDesktop } from 'react-icons/io5';

import { GrCurrency } from 'react-icons/gr';
import { RiTimeFill } from 'react-icons/ri';


class JunetenContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: null,
			dataItems: [
				{
					id: '1',
					buttonLabel: 'Investment Plan 1',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'D-Ground Corner',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
				{
					id: '2',
					buttonLabel: 'Investment Plan 2',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'Clock Tower',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
				{
					id: '3',
					buttonLabel: 'Investment Plan 3',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'University Road',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
				{
					id: '4',
					buttonLabel: 'Investment Plan 4',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'Faisalbabd',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
                {
					id: '5',
					buttonLabel: 'Investment Plan 5',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'General Bus Stand',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
                {
					id: '6',
					buttonLabel: 'Investment Plan 6',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'Allied Hospital corner',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
                {
					id: '7',
					buttonLabel: 'Investment Plan 7',
					buttonIcon: <FaSuitcase/>,
					cardHeaderIcon: <IoDesktop/>,
					cardHeaderLabel: 'Milat Chock',
					currencyIcon: <GrCurrency/>,
					AmountLabel: 'Amount',
					RentLabel: 'Monthly Rent',
					clockIcon: <RiTimeFill/>,
					durationLabel: 'Duration',
					amountPrice: '130, 000 Pkr/-',
					rentPrice: '30,000 Pkr/-',
					time: '5 months',
				},
			],

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
                <div className={styles.wrapper}>
                <div className={styles.buttonPanel}>
                    {this.state.dataItems.map((item, index) => (
                        <div  key={index} className={styles.btnrow}>
                            <div className={styles.buttonPanel} onClick={() => this.OneClick(item.id)} style={{ color: item.id === this.state.selected ? 'white' : 'black', backgroundColor: item.id === this.state.selected ? '#2fc772' : 'white' }}>
                                <div>
                                    <p className={styles.btnicon}>{item.buttonIcon}</p>
                                    <p className={styles.btnlabel}>{item.buttonLabel}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cardPanel}>
                    {this.state.dataItems.map((item, index) => {
                        if(item.id === this.state.selected) {
                            return(
                                <div className={styles.cardPanel}>
                                    <AbCard>
                                        <AbCardContent
                                            item={item}
                                        />
                                    </AbCard>
                                </div>
                            )
                        }
                        return null
                    })}
                </div>

                </div>
            );
	}
}

export default JunetenContainer;
