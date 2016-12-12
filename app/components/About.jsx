var React = require('react');
var Nav = require('./Nav');

var About = React.createClass({
    render: function () {
        return(
            <div>
                <h1>About Component</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = About;
