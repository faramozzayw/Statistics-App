import React, { Component } from 'react';

import Calculation from './../modules/Calculation';
import ParseToArray from './../modules/ParseToArray';

import Card from './Card';
import HelpCard from './HelpCard';

export default class StaticForm extends Component {
	state = {
		x:'',
		n: '',
		result: {
			average: null,
			deviation: null,
			variance: null
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

		if (regExp.test(this.state.x) || regExp.test(this.state.n) 
			|| this.state.x.trim() === '' || this.state.n.trim() === '') {
			alert('Input error. Review the correctness of the data.');
			return;
		}

		const [x, n] = [ParseToArray(this.state.x), ParseToArray(this.state.n)];
		if (x.length !== n.length) {
			alert('Input error. Review the correctness of the data.');
			return;
		}

		for (let i = 0; i < x.length; i++) {
			if (x[i] >= x[i + 1]) {
				alert('Input error. Review the correctness of the data.');
				return;
			}
		}

		let result = Calculation(x, n);
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
			<Card average={this.state.result.average} deviation={this.state.result.deviation} variance={this.state.result.variance} />
		);
		const resultButtonText = this.state.showResult ? "Hide result" : "Show result";
		const helpCard = this.state.showHelp && <HelpCard/>;
		return (
			<div className="uk-container uk-width-large">
				<form>
			    <fieldset className="uk-fieldset">
			        <legend className="uk-legend">A inputting data</legend>		
			        <div className="uk-margin">
			        	<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a value" id="x"
			            				value={this.state.x}
			            				name='x'
													onChange={this.handleInputChange.bind(this)}
			            				/>
			         	</div>
			         	<div className="uk-margin">
			            <input className="uk-input uk-form-large" type="text" placeholder="Input a frequency" id="n"
			            				value={this.state.n}
			            				name='n'
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
