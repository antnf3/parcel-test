import React, { Component, Fragment } from 'react';
import styles from './styles.scss';

const API_KEY = 'bb2e7b1915621c57331bcfb02a1c8929';

class App extends Component {
	state = {};

	componentDidMount() {
		this._getGeolocation();
	}

	_getGeolocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					//console.log(`${position.coords.latitude} ${position.coords.longitude}`);
					this._getWeatherAPI(position.coords.latitude, position.coords.longitude);
				},
				err => {
					console.log(err);
				}
			);
		} else {
		}
	}

	_getWeatherAPI = (lat, lon) => {
		fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
			.then(response => response.json())
			.then(json => {
				this.setState({
					temperature: json.main.temp,
					name: json.weather[0].main,
					isLoaded: true,
				});
			});
	};

	render() {
		const { temperature, name, isLoaded } = this.state;
		return (
			<Fragment>
				<div className={styles.title}>{isLoaded ? name : 'loading...'}</div>
				<div>{temperature}</div>
			</Fragment>
		);
	}
}

export default App;
