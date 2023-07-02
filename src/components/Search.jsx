import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="search">
      <div className="inlineFiels">
        <div className="searchForm">
          <input
            placeholder="Search..."
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        <div className="filters">
          <div className="hidden-toggles">
            <input
              name="type"
              type="radio"
              id="coloration-low"
              className="hidden-toggles__input"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <label htmlFor="coloration-low" className="hidden-toggles__label">
              All
            </label>
            <input
              name="type"
              type="radio"
              id="coloration-medium"
              className="hidden-toggles__input"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <label
              htmlFor="coloration-medium"
              className="hidden-toggles__label"
            >
              Movies
            </label>
            <input
              name="type"
              type="radio"
              id="coloration-high"
              className="hidden-toggles__input"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <label htmlFor="coloration-high" className="hidden-toggles__label">
              Series
            </label>
            <input
              name="type"
              type="radio"
              id="coloration-striking"
              className="hidden-toggles__input"
              data-type="game"
              onChange={handleFilter}
              checked={type === "game"}
            />
            <label
              htmlFor="coloration-striking"
              className="hidden-toggles__label"
            >
              Games
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Search };
