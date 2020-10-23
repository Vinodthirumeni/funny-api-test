import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./FoodWorld.css";
import LoadingOverlay from "react-loading-overlay";
import FoodWorldParser from "./FoodWorldParser";

function FoodWorld() {
  const [getRecipe, setGetRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  const searchRecipe = async (e) => {
    if (input.length > 0) {
      setLoader(true);
      await fetch(
        `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${input}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "edamam-food-and-grocery-database.p.rapidapi.com",
            "x-rapidapi-key":
              "b3924b2451msheb465d34072c8f2p12bd8ejsn8abbb668ad1d",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setGetRecipe(data);
        });
      setLoader(false);
    } else {
      alert("Please enter the ingredients");
    }
  };

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="food">
        <h1>Welcome to food worlds</h1>
        <h2>
          Type the ingredients you have in the below box with comma
          seperator.Eg(Apple,Corn...){" "}
        </h2>
        <div className="food__container">
          <form>
            <textarea
              type="text"
              className="food__input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <Button variant="contained" onClick={searchRecipe}>
              Search Recipe
            </Button>
          </form>
        </div>
        <div className="food__parser">
          <FoodWorldParser
            text={getRecipe?.text}
            parsed={getRecipe?.parsed}
            hints={getRecipe?.hints}
            links={getRecipe?._links}
          />
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default FoodWorld;
