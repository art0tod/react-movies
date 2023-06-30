import React from 'react';
import { Movie } from './Movie.jsx'

class Movies extends React.Component {

  render() {

    const { movies = [], results } = this.props;

    return <div className='movies'>
      <div className='searchInfo'>
        {movies.length > 0 ? <div>Results found: {results}</div>
          : <div><b>Nothing found<br /> ☹</b></div>}
      </div>
      <div className='moviesList'>
        {movies.length ? movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
        )) : null
        }
      </div>
    </div>
  }
}

export { Movies }
