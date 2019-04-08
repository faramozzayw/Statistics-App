import React, { Component } from 'react';
import Calculation from './../function/Calculation';
import ParseToArray from './../function/ParseToArray';

export default class  extends Component {
	state = {
		x:'',
		n: '',
		result: {}
	}

	handleInputChange = e => this.setState({[e.target.name]: e.target.value})

	handleClick = e => {
		e.preventDefault();
		console.clear();
		let regExp = new RegExp(/[a-z\.а-я]/gi);

		if (regExp.test(this.state.x) || regExp.test(this.state.n) 
			|| this.state.x.trim() === '' || this.state.n.trim() === '') {
			alert('Input error. Check the correctness of the data.')
			return;
		}


		let x = ParseToArray(this.state.x);
		let n = ParseToArray(this.state.n);
		console.log(`
			[x]: ${x} => [typeof]: ${typeof x}
			[n]: ${n} => [typeof]: ${typeof n}
		`);



		//let result = Calculation();
		//console.log("result", result);
	}

	render()  {
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
			        		onClick={this.handleClick.bind(this)}>Start a root separation</button>
			        </div>
			    </fieldset>
				</form>
			</div>
		);
	}
}
