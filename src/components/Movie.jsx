function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={id} className='card'>
      <div className='cardImage'>
        <img alt={id} src={poster} draggable={false} />
      </div>
      <div className='cardContent'>
        <span className='title'>{title}</span>
        <p><span className='type'>{type}</span>{year}</p>
      </div>
    </div>
  )
}

export { Movie }
