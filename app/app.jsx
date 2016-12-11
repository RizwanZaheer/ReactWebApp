var React = require('react');
var ReactDOM = require('react-dom');

var objOne = {
	name: 'rizwan',
	age: 22
};
var objTwo = {
	location: 'Islmabad',
	...objOne
};
console.log(objTwo);
ReactDOM.render(
	<h1>Hello React Boilerplate!</h1>,
	document.getElementById('app')
);
