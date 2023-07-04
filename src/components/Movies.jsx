import React from 'react';
import { Movie } from './Movie.jsx'

class Movies extends React.Component {

  render() {

    const { movies = [], results } = this.props;

    return <div className='movies'>
      <div className='searchInfo'>
        {movies.length > 0 ? <div>
          <span>Results found: {results}</span>
          <br />
          <span>Total pages: {Math.round(results / movies.length)}</span>
        </div>
          : <div><b>Nothing found<br /> ☹</b></div>}
      </div>
      <div className='moviesList'>
        {movies.length ? movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
        )) : null
        }
      </div>
      {movies.length > 1 ?
        <div
          className='helper_toTop'
        ><span
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            })
          }}
        >To top</span></div>
        : null}
    </div>
  }
}

export { Movies }
