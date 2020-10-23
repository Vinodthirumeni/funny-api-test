import React, { useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import "./Jokes.css";
import Button from '@material-ui/core/Button';

function Jokes() {
  const [jokes, setJokes] = useState([]);
  const [loader, setLoader] = useState(false);

  const newJoke = async (e) => {
    setLoader(true);
    await fetch("https://sv443.net/jokeapi/v2/joke/Any")
      .then((response) => response.json())
      .then((data) => {
        setJokes(data);
      });
    setLoader(false);
  };

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="jokes">
        <h1>Welcome to jokes station</h1>

        <div className="jokes__container">
          {jokes && (
            <div className="jokes__body">
              <div className="jokes__type">
                <p>
                  {jokes?.category && <strong>Category : </strong>}
                  {jokes?.category}
                </p>
                <p>
                  {jokes?.type && <strong>Type : </strong>}
                  {jokes?.type}
                </p>
                {jokes?.flags?.nsfw === true && (
                  <p>
                    <strong>Flag : </strong>Not safe for work
                  </p>
                )}
                {jokes?.flags?.religious === true && (
                  <p>
                    <strong>Flag : </strong>Religious
                  </p>
                )}
                {jokes?.flags?.political === true && (
                  <p>
                    <strong>Flag : </strong>Political
                  </p>
                )}
                {jokes?.flags?.racist === true && (
                  <p>
                    <strong>Flag : </strong>Racist
                  </p>
                )}
                {jokes?.flags?.sexist === true && (
                  <p>
                    <strong>Flag : </strong>Sexist
                  </p>
                )}
              </div>
              <p>{jokes?.setup}</p>
              <p>{jokes?.delivery}</p>
              <p>{jokes?.joke}</p>
            </div>
          )}
          <Button variant="contained" onClick={newJoke}>Tap me</Button>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Jokes;
