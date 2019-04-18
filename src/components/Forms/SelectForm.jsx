import React, { Component } from 'react';

export default class SelectForm extends Component {
	handleClick = e => this.props.selectChange(e.target.name)

	render() {
		return(
			<section className="uk-section">
		  	<div className="uk-container uk-width-large">
		  	  <h1 className="uk-legend">What are you need?</h1>
		  	  <button 
		  	  	className="uk-button uk-button-danger uk-width-1-1 uk-margin-small-bottom" 
		  	  	onClick={this.handleClick.bind(this)}
		  	  	name="static"
		  	  >I'm need calculus static data</button>
		  	  <button 
		  	  	className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" 
		  	  	onClick={this.handleClick.bind(this)}
		  	  	name="dynamic"
		  	  >I'm need calculus dynamic data</button>
		  	</div>
			</section>
		);
	};
};