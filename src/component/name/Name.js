import React, { useState, useEffect, useCallback } from "react";
import "./Name.css";
import TextField from "@material-ui/core/TextField";
import iso3311a2 from "iso-3166-1-alpha-2";
import ProgressBar from "react-percent-bar"; 

function Name() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState("");

  const triggerChange = useCallback(
    async (input) => {
      await fetch(`https://api.nationalize.io/?name=${input}`)
        .then((response) => response.json())
        .then((data) => {
          setNames(data);
        });
    },
    [setNames]
  );

  useEffect(() => {
    if (input) {
      triggerChange(input);
    }
  }, [input, triggerChange, setNames]);

  return (
    <div className="name">
    <h1>Predict Your Nationality By Your Name</h1>
    <h2>Type your name</h2>
      <form>
        <TextField
          id="standard-basic"
          label="Type your name"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </form>
      <div className="name__parser">
        {names.name && <p className="name__parserName"><strong> Name : </strong> {names.name}</p>}
        {names.country ? (
          names?.country.map((name) => (
            <div className="name__percentage">
             {name.country_id &&  <p><strong> Country : </strong>{iso3311a2.getCountry(name.country_id)}</p> }
              <ProgressBar
                colorShift={true}
                fillColor={
                  "#" +
                  (0x1000000 + Math.random() * 0xffffff)
                    .toString(16)
                    .substr(1, 6)
                }
                percent={name.probability * 100}
              />
              <h6>{`${name.probability * 100} %`}</h6>
            </div>
          ))
        ) : (
          <h1 className="name__footerText">No matches found</h1>
        )}
      </div>
    </div>
  );
}

export default Name;
