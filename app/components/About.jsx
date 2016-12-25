var React = require('react');
var Nav = require('./Nav');

var About = (props) => {
    return(
        <div>
            <h1 className="text-center">About</h1>
            {props.children}
            <p> This is Weather application build on React. I have built this for the complete React Web Application.</p>
            <p>Here are some of the tools I used.</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - I used open Weather map to search for Weather data.
                </li>
            </ul>
        </div>
    );
}

module.exports = About;
