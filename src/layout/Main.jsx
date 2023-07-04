import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=&page=1`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        setResults(data.totalResults);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const searchMovies = (str, type = "all", page = 1) => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY
      }&s=${str}${type !== "all" ? `&type=${type}` : ""}&page=${page}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
        setResults(data.totalResults);
        setPage(page)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <main className="content">
      <Search searchMovies={searchMovies} />
      {loading ? (
        <Preloader />
      ) : (
        <Movies movies={movies} results={results} loading={loading} page={page} />
      )}
    </main>
  );
};

export { Main };
