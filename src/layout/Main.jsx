import React from 'react';
import { Movies } from '../components/Movies'
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
    results: 0
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=runner&page=1`)
      .then(resp => resp.json())
      .then(data => this.setState({ movies: data.Search, loading: false, results: data.totalResults }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false })
      })
  }

  searchMovies = (str, type = 'all', page = 1) => {
    this.setState({ loading: true })
    fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}&page=${page}`)
      .then(resp => resp.json())
      .then(data => this.setState({ movies: data.Search, loading: false, results: data.totalResults }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false })
      })
  }

  changePage = (dir) => {
    this.setState({ loading: true })
    if (dir) {
      this.setState({ page: this.state.page + 1 }, () => {
        this.setState({ loading: false })
      })
    }
    if (!dir) this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { movies, loading, results } = this.state;

    return <main className="content">
      <Search searchMovies={this.searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <Movies
          movies={movies}
          results={results}
          loading={loading}
        />
      )}
    </main>
  }
}

export { Main }
