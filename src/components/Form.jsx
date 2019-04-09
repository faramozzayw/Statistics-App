import React, { Component } from 'react';

import Calculation from './../modules/Calculation';
import ParseToArray from './../modules/ParseToArray';

import Card from './Card';

export default class Form extends Component {
	state = {
		x:'',
		n: '',
		result: {
			average: null,
			deviation: null,
			variance: null
		},
		viewResult: false
	}

	handleInputChange = e => this.setState({[e.target.name]: e.target.value})

	handleClick = e => {
		e.preventDefault();
		console.clear();

		let regExp = new RegExp('/[a-zа-я\.]/gi');

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

		(() => {
			for (let i = 0; i < x.length; i++) {
				if (x[i] > x[i + 1]) {
					alert('Input error. Review the correctness of the data.');
					return;
				}
			}
		})();

		let result = Calculation(x, n);
		this.setState({
			result: Object.assign(result)
		});
	}

	getResultClick = e => {
		e.preventDefault();
		this.setState({ viewResult: !this.state.viewResult });
	}

	render()  {
		const resultCard = this.state.viewResult && (
			<Card average={this.state.result.average} deviation={this.state.result.deviation} variance={this.state.result.variance} />
		);
		return (
			<div className="uk-container">
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
			        <button className="uk-button uk-button-primary"
			        		onClick={this.handleClick.bind(this)}>Start calculus</button>
			        <button className="uk-button uk-button-primary"
			        		onClick={this.getResultClick.bind(this)}>Get result</button>
			        </div>
			    </fieldset>
				</form>
				{resultCard}
			</div>
		);
	}
}