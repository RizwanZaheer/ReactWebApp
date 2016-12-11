var GreeterMessage = React.createClass({
	render: function(){
		return(
			<div>
				<h1>React GreeterMessage!</h1>
				<p>Message</p>
			</div>
		);
	}
});

var GreeterForm = React.createClass({
	onFormSubmit: function (e) {
		var name = this.refs.name.value;
		if (name.length > 0) {
			this.refs.name.value = '';
		}
	}
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
			name : this.props.name
		};
	},
	handleNewName: function(name){
		e.preventDefault();
		let nameRef = this.refs.name;
		var name = nameRef.value;
		nameRef.value = '';
		if (typeof name === 'string' && name.length > 0) {
			this.setState({
				name : name
			});
		}
		//alert(name);
	},
	render: function(){
		let name = this.state.name;
		return (
			<div>
				<h1>Welcome {name} in React!</h1>
				<p>{this.props.message + `!!`}</p>
				<GreeterMessage/>
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="name"/>
					<button>Set Name</button>
				</form>
				<br></br>
				<GreeterForm/>
			</div>
		);
	}
});

ReactDOM.render(
	<Greeter name="Rizwan" />,
	document.getElementById('app')
);
