import React, { useState, useEffect, useCallback } from "react";
import Button from "@material-ui/core/Button";
import "./Books.css";
import LoadingOverlay from "react-loading-overlay";
import BookParser from "./BookParser";

function Books() {
  const [getBook, setGetBook] = useState([]);
  const [input, setInput] = useState("");
  const [loader, setLoader] = useState(false);

  const triggerChange = useCallback(
    async (input) => {
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        .then((response) => response.json())
        .then((data) => {
          setGetBook(data);
        });
      setLoader(false);
    },
    [setGetBook]
  );
  useEffect(() => {
    if (input) {
      setLoader(true);
      triggerChange(input);
    }
  }, [input, triggerChange, setGetBook]);

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="food">
        <h1>Welcome to book search</h1>
        <h2>Search the books</h2>
        <div className="food__container">
          <form>
            <input
              type="text"
              className="book__input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="food__parser">
          <BookParser items={getBook?.items} />
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Books;
