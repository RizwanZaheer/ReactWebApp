var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Islamabad',
            temp: 20
        }
    },
    handleSearch: function (location) {
        let that = this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp
            });
        }, function (errorMessage) {
            alert("errorMessage");
        });
        //alert(`location ${location}`);
    },
    render :function () {
        var {temp, location} = this.state;
        return(
            <div>
                <h1>Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp}/>
            </div>
        );
    }
});
module.exports = Weather;
