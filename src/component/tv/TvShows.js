import React, { useState, useEffect, useCallback } from "react";
import "./TvShows.css";
import TextField from "@material-ui/core/TextField";
import TvParser from "./TvParser";
import LoadingOverlay from "react-loading-overlay";

function TvShows() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [searchTV, setSearchTV] = useState([]);
  const [loader, setLoader] = useState(false);

  const triggerChange = useCallback(
    async (input, search) => {
      const Url =
        search === "shows"
          ? `http://api.tvmaze.com/search/shows?q=${input}`
          : `http://api.tvmaze.com/search/people?q=${input}`;
      await fetch(Url)
        .then((response) => response.json())
        .then((data) => {
          setSearchTV(data);
        });
      setLoader(false);
    },
    [setSearchTV]
  );

  useEffect(() => {
    if (input) {
      setLoader(true);
      triggerChange(input, search);
    }
  }, [input, triggerChange, setSearchTV,search]);

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="tvShows">
        <h1>Welcome to TV Shows</h1>
        <div className="tv__filters">

        <form>
          <TextField
            id="standard-basic"
            label="Search Tv Shows"
            onChange={(e) => {
              setInput(e.target.value);
              setSearch("shows");
            }}
          />
        </form>
        <form>
          <TextField
            id="standard-basic"
            label="Search Tv People"
            onChange={(e) => {
              setInput(e.target.value);
              setSearch("poeple");
            }}
          />
        </form>
        </div>
        <div className="tvShows__parser">
          {searchTV.length > 0 ? (
            search === "shows" ? (
              searchTV.map(
                (tv) =>
                  tv?.show?.image?.medium && (
                    <TvParser
                      URL={tv?.show?.url}
                      name={tv?.show?.name}
                      type={tv?.show?.type}
                      language={tv?.show?.language}
                      geners={tv?.show?.genres}
                      status={tv?.show?.status}
                      runtime={tv?.show?.runtime}
                      releaseDate={tv?.show?.premiered}
                      rating={tv?.show?.rating?.average}
                      tvName={tv?.show?.network?.name}
                      country={tv?.show?.network?.country?.name}
                      image={tv?.show?.image}
                      summary={tv?.show?.summary}
                    />
                  )
              )
            ) : (
              searchTV.map(
                (tv) =>
                  tv?.person?.image?.medium && (
                    <TvParser
                      name={tv?.person?.name}
                      country={tv?.person?.country?.name}
                      birthDate={tv?.person?.birthday}
                      deathDate={tv?.person?.deathday}
                      image={tv?.person?.image}
                      gender={tv?.person?.gender}
                    />
                  )
              )
            )
          ) : (
            <h1 className="tvShows__footerText">No matches found</h1>
          )}
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default TvShows;
