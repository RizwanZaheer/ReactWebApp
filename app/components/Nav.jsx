var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(){
      e.preventDefault();
      var location = this.refs.search.value;
      var encodedLocation = encodeURIComponent(location);
      if (location.length > 0 ) {
        this.refs.search.value = '';
        window.location.hash = '#/?location=' + encodedLocation;
      }
      //alert(location);
    },
    render: function () {
        return(
            <div className="top-bar">
              <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                  <li className="menu-text">React App</li>
                  <li>
                    <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</IndexLink>
                  </li>
                  <li>
                      <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link>
                  </li>
                </ul>
              </div>
              <div className="top-bar-right">
                <form onSubmit={this.onSearch}>
                    <ul className="menu">
                      <li><input type="search" placeholder="Search" ref="search"/></li>
                      <li><button type="button" className="button">Search</button></li>
                    </ul>
                </form>
              </div>
            </div>
        );
    }
});
module.exports = Nav;
