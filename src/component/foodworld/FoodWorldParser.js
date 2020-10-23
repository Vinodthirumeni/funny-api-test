import React from "react";
import HintsParsed from "./HintsParsed";
import "./FoodWorldParser.css";

function FoodWorldParser({ text, parsed, hints, links }) {
  return (
    <div className="foodWorldParser">
      {hints?.map((hint) => (
        <HintsParsed food={hint?.food} measures={hint?.measures} />
      ))}
    </div>
  );
}

export default FoodWorldParser;
