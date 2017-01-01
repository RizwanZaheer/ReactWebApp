var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

var Main = require('./components/Main');
var Weather = require('./components/Weather');
var About = require('./components/About');

//loading foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
require('style!css!app/styles/app.css');

$(document).foundation();

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Weather}/>
			<Route path="about" component={About}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
