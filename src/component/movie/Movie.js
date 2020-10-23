import React, { useState, useEffect, useCallback } from "react";
import "./Movie.css";
import TextField from "@material-ui/core/TextField";
import MovieParser from "./MovieParser";
import LoadingOverlay from "react-loading-overlay";

function Movie() {
  const [input, setInput] = useState("");
  const [searctMovie, setSearchMovie] = useState([]);
  const [loader, setLoader] = useState(false);

  const triggerChange = useCallback(
    async (input) => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=19f84e11932abbc79e6d83f82d6d1045&query=${input}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchMovie(data.results);
        });
      setLoader(false);
    },
    [setSearchMovie]
  );
  useEffect(() => {
    if (input) {
      setLoader(true);
      triggerChange(input);
    }
  }, [input, triggerChange, setSearchMovie]);

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="movie">
        <h1>Welcome to Movie DB</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Search Movie"
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <div className="movie__parser">
          {searctMovie.length > 0 ? (
            searctMovie.map(
              (movie) =>
                movie?.poster_path && (
                  <MovieParser
                    image={movie?.poster_path}
                    name={movie?.original_title}
                    geners={movie?.genre_ids}
                    language={movie?.en}
                    releaseDate={movie?.release_date}
                    rating={movie?.popularity}
                    summary={movie?.overview}
                  />
                )
            )
          ) : (
            <h1 className="movie__footerText">No matches found</h1>
          )}
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Movie;
