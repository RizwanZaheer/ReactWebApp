var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return(
        <div>
            <h1>Nav bar</h1>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
        </div>
    );
}

module.exports = Nav;
