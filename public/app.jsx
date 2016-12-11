var GreeterMessage = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Hello {this.props.name}!</h1>
				<p>{this.props.message}!</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		e.preventDefault();
		var name = this.refs.name.value;
		var message = this.refs.message.value;
		var update = {};
		if (name.length > 0 && message.length > 0) {
			this.refs.name.value = '';
			this.refs.message.value = '';
			this.props.onNewName(name,message);
		}
	},
	render: function () {
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name" placeholder="Enter Name"/>
					<br/>
					<textarea ref="message" placeholder="Enter Message"></textarea>
					<br/>
					<button>Set Name</button>
				</form>
			</div>
		);
	}
});

var Greeter = React.createClass({
	getDefaultProps: function(){
		return {
			name: 'Hoody',
			message:'Default Message'
		};
	},
	getInitialState: function(){
		return {
			name : this.props.name,
			message: this.props.message
		};
	},
	handleNewName: function(name, message){
		this.setState({
			name : name,
			message: message
		});
		//alert(name);
	},
	render: function(){
		let name = this.state.name;
		let message = this.state.message;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName, this.handleNewName}/>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter />,
	document.getElementById('app')
);
