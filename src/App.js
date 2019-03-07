import React, { Component } from 'react';
import styles from './styles.scss';

class App extends Component {
	state = {};

	componentDidMount() {
		this._getMovies();
	}

	_getMovies = async () => {
		const movies = await this._callAPI();
		this.setState({
			movies,
		});
		console.log(movies);
	};

	_callAPI = () => {
		return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
			.then(res => res.json())
			.then(json => {
				return json.data.movies;
			})
			.catch(err => console.log(err));
	};

	render() {
		const { movies } = this.state;
		return <div>aaaaa</div>;
	}
}

export default App;
