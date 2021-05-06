import React, { Component, useEffect } from 'react';
import FunctionalComponent from './FunctionalComponent';

interface IState {
    lat: number,
    lon: number,
    apiKey: string; //REPLACE THIS LATER
    fetchURL: string;
    temperature: number;
}

class ClassComponent extends Component<{}, IState> {
    constructor(props) {
        super(props)
            this.state = {
                lat: 0,
                lon: 0,
                apiKey: "f79aeb6c8c01eb704e08e1aca98625ce",
                fetchURL: "https://api.openweathermap.org/data/2.5/weather?",
                temperature: 0,
            }
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition((pos) => {
            var crd = pos.coords;

            console.log('Your current position is:');
            this.setState({
                lat: crd.latitude,
                lon: crd.longitude
            })
            console.log(`Latitude: ${this.state.lat}`);
            console.log(`Longitude: ${this.state.lon}`);
        })
    }

    fetchWeather = () => {
        this.setState({
            fetchURL: `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${this.state.apiKey}`
        })
        fetch(this.state.fetchURL)
            .then((res) => {
                //console.log(res);
                return res.json();
            })
            .then((data) => {
                //console.log(data);
                this.setState({ temperature: data.main.temp});
                console.log("The temperature is ", this.state.temperature)
            })
            .catch((error) => console.log(error));
    }

    totalRecall = async () => {
        await this.getLocation();
        await this.fetchWeather();
        console.log(this.state.temperature);
    }

    componentDidMount() {
        this.totalRecall();
    }

    render() {
        return (
            <div className="App">
                <h1>Class Component</h1>
                <FunctionalComponent temperature={this.state.temperature} />
            </div>
        );
    }
}

export default ClassComponent;