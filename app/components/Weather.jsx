var React = require('react');
var WeatherForm = require('./WeatherForm');
var WeatherMessage = require('./WeatherMessage');
var openWeatherMap = require('../api/openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (errorMessage) {
            that.setState({
                isLoading: false
            });
            alert("Invalid City is Enter!!!");
        });
        //alert(`location ${location}`);
    },
    render :function () {
        var {isLoading, temp, location} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h2 className="text-center">Fetching Data...</h2>;
            } else if( temp && location ){
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return(
            <div>
                <h1 className="text-center">Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});
module.exports = Weather;
