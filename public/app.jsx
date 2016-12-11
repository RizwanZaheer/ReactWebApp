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
		if (name.length > 0) {
			this.refs.name.value = '';
			this.props.onNewName(name);
		}
	},
	render: function () {
		return(
			<div>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" ref="name"/>
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
	handleNewName: function(name){
		this.setState({
			name : name
		});
		//alert(name);
	},
	render: function(){
		let name = this.state.name;
		let message = this.state.message;
		return (
			<div>
				<GreeterMessage name={name} message={message}/>
				<GreeterForm onNewName={this.handleNewName}/>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter />,
	document.getElementById('app')
);
