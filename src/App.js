import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cat from "./component/cat/Cat";
import MakeUp from "./component/makeup/MakeUp";
import Jokes from "./component/jokes/Jokes";
import TvShows from "./component/tv/TvShows";
import Movie from "./component/movie/Movie";
import Name from "./component/name/Name";
import Button from "@material-ui/core/Button";
import Excel from "./component/excel/Excel";
import Csv from "./component/csv/Csv";
import FoodWorld from "./component/foodworld/FoodWorld";
import Books from "./component/book/Books";

function App() {
  const [btnMakeUp, setBtnMakeUp] = useState("");
  const [btnCat, setBtnCat] = useState("");
  const [btnJokes, setBtnJokes] = useState("");
  const [btnTvShows, setBtnTvShows] = useState("");
  const [btnMovie, setBtnMovie] = useState("");
  const [btnName, setBtnName] = useState("");
  const [btnExcel, setBtnExcel] = useState("");
  const [btnCsv, setBtnCsv] = useState("");
  const [btnFood, setBtnFood] = useState("");
  const [btnBook, setBtnBook] = useState("");

  const makeup = () => {
    setBtnMakeUp("primary");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const cat = () => {
    setBtnMakeUp("");
    setBtnCat("primary");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const jokes = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("primary");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const tvshows = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("primary");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const movie = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("primary");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const name = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("primary");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const excel = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("primary");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("");
  };
  const csv = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("primary");
    setBtnFood("");
    setBtnBook("");
  };
  const food = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("primary");
    setBtnBook("");
  };
  const book = () => {
    setBtnMakeUp("");
    setBtnCat("");
    setBtnJokes("");
    setBtnTvShows("");
    setBtnMovie("");
    setBtnName("");
    setBtnExcel("");
    setBtnCsv("");
    setBtnFood("");
    setBtnBook("primary");
  };

  return (
    <Router>
      <div className="app">
        <div className="app__header">
          <Link to="/makeup">
            <Button color={btnMakeUp} variant="contained" onClick={makeup}>
              Search Makeup Products
            </Button>
          </Link>
          <Link to="/cat">
            <Button color={btnCat} variant="contained" onClick={cat}>
              Cat
            </Button>
          </Link>
          <Link to="/jokes">
            <Button color={btnJokes} variant="contained" onClick={jokes}>
              Jokes
            </Button>
          </Link>
          <Link to="/tvshows">
            <Button color={btnTvShows} variant="contained" onClick={tvshows}>
              Search Tv Shows
            </Button>
          </Link>
          <Link to="/movie">
            <Button color={btnMovie} variant="contained" onClick={movie}>
              Search Movie
            </Button>
          </Link>
          <Link to="/name">
            <Button color={btnName} variant="contained" onClick={name}>
              Predict Your Nationality By Your Name
            </Button>
          </Link>
          <Link to="/excel">
            <Button color={btnExcel} variant="contained" onClick={excel}>
              Excel read/write with react js
            </Button>
          </Link>
          <Link to="/csv">
            <Button color={btnCsv} variant="contained" onClick={csv}>
              Csv read/write with react js
            </Button>
          </Link>
          <Link to="/foodworld">
            <Button color={btnFood} variant="contained" onClick={food}>
              Food World
            </Button>
          </Link>
          <Link to="/book">
            <Button color={btnBook} variant="contained" onClick={book}>
              Book Search
            </Button>
          </Link>
        </div>

        <Switch>
          <Route path="/makeup">
            <MakeUp />
          </Route>
          <Route path="/cat">
            <Cat />
          </Route>
          <Route path="/jokes">
            <Jokes />
          </Route>
          <Route path="/tvshows">
            <TvShows />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/name">
            <Name />
          </Route>
          <Route path="/excel">
            <Excel />
          </Route>
          <Route path="/csv">
            <Csv />
          </Route>
          <Route path="/foodworld">
            <FoodWorld />
          </Route>
          <Route path="/book">
            <Books />
          </Route>
          <Route path="/">
            <h1>Welcome to Funny Contents</h1>
            <h2>Select header tabs to play</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
