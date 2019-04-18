import React, { Component } from 'react';

import CalculationDynamic from './../../modules/CalculationDynamic';
import ParseToArray from './../../modules/ParseToArray';
import DateToNumber from './../../modules/DateToNumber';

import DynamicCard from './../Cards/DynamicCard';
import DynamicHelpCard from './../Cards/DynamicHelpCard';

export default class DynamicForm extends Component {
	state = {
		y:'',
		t: '',
		result: {
			average: null,
			deviation: null,
			variance: null,
			absIncrease: null
		},
		canGetResult: false,
		showResult: false,
		showHelp: false
	}

	handleInputChange = e => this.setState({
		[e.target.name]: e.target.value,
		canGetResult: false,
		showResult: false
	})

	handleClick = e => {
		e.preventDefault();
		console.clear();

		let regExp = /[a-zа-я]/g;

		if (regExp.test(this.state.y) || regExp.test(this.state.t) 
			|| this.state.y.trim() === '' || this.state.t.trim() === '') {
			alert('Input error. Review the correctness of the data.');
			return;
		}

		const [y, t] = [ParseToArray(this.state.y), DateToNumber(this.state.t)];
		if (y.length !== t.length) {
			alert('Input error. Review the correctness of the data.');
			return;
		}

		let result = CalculationDynamic(y, t);
		this.setState({
			result: Object.assign(result),
			canGetResult: true
		});
	}

	getResultClick = e => {
		e.preventDefault();
		this.state.canGetResult && this.setState({ showResult: !this.state.showResult });
	}

	getHelpClick = e => {
		e.preventDefault();

		this.setState({
			showHelp: !this.state.showHelp
		})
	}

	render()  {
		const resultCard = this.state.showResult && (
			<DynamicCard 
				average={this.state.result.average} 
				deviation={this.state.result.deviation} 
				variance={this.state.result.variance}
				absIncrease={this.state.result.absIncrease}
			/>
		);
		const resultButtonText = this.state.showResult ? "Hide result" : "Show result";
		const helpCard = this.state.showHelp && <DynamicHelpCard/>;
		return (
			<div className="uk-container uk-width-large">
				<form>
			    <fieldset className="uk-fieldset">
			        <legend className="uk-legend">A inputting data</legend>		
			        <div className="uk-margin">
			        	<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a value" id="x"
			            				value={this.state.y}
			            				name='y'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>
			         	<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a frequency" id="n"
			            				value={this.state.t}
			            				name='t'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			        	</div>
			        	<button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
			        			onClick={this.handleClick.bind(this)}>Start calculus</button>
			        	<button className="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom"
			        			onClick={this.getHelpClick.bind(this)}>Need help?</button>
			        	{helpCard}
			        	<button className={`uk-button ${ this.state.canGetResult ? "uk-button-primary" : "uk-button-secondary" } uk-width-1-1 uk-margin-small-bottom` }
			        			onClick={this.getResultClick.bind(this)}>{resultButtonText}</button>
			        </div>
			    </fieldset>

				</form>
				{resultCard}
			</div>
		);
	}
}
