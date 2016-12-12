var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			// IndexRoute in default component to show on after Main component
			<IndexRoute component={Weather}/>
			<Route path="about" component={About}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
