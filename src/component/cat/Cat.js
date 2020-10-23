import React, { useState, useEffect } from "react";
import "./Cat.css";
import LoadingOverlay from "react-loading-overlay";


function Cat() {
  const [cats, setCats] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://cat-fact.herokuapp.com/facts")
      .then((response) => response.json())
      .then((data) => {
        setCats(data.all);
      });
      setLoader(false)
  }, []);

  return (
        <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
    <div className="cat__app">
      <h1>Welcome to cat facts</h1>
      <h2>Just scroll the box </h2>
      <div className="cat__app__videos">
        {cats.map((cat) => (
          <div className="cat__video">
            <div className="cat__video__text">
              <h2 className="cat__video__title">Random Cat facts</h2>
              <h3 className="cat__video__Subtitle">
                Facts by {cat?.user?.name?.first} {cat?.user?.name?.last}
              </h3>
              <h1>{cat?.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
    </LoadingOverlay>
  );
}

export default Cat;
