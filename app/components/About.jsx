var React = require('react');
var Nav = require('./Nav');

var About = (props) => {
    return(
        <div>
            <h1>About Component</h1>
            {props.children}
        </div>
    );
}

module.exports = About;
