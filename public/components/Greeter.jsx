var React = require('react');

var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'Rizwan',
			message:'Welcome in React...'
		};
	},
	getInitialState: function(){
		return {
			name : this.props.name,
			message: this.props.message
		};
	},
	handleNewData: function(updates){
		this.setState(updates);
		//alert(name);
	},
	render: function(){
		let name = this.state.name;
		let message = this.state.message;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewData={this.handleNewData}/>
			</div>
		);
	}
});

module.exports = Greeter;
