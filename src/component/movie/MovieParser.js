import React, { useState } from "react";
import { motion } from "framer-motion";
import "./MovieParser.css";
import StarRatings from "react-star-ratings";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieParser({
  URL,
  name,
  language,
  geners,
  releaseDate,
  rating,
  image,
  summary,
}) {
  const [selectedImg, setSelectedImg] = useState(null);

  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  }

  const modalClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      <motion.div className="movie__container">
        {image && (
          <img
            onClick={() => setSelectedImg(`${base_url}${image}`)}
            src={`${base_url}${image}`}
            alt="#Tv"
          />
        )}
        {name && (
          <p className="movie__containerName">
            <strong>Name : </strong>
            {name}
          </p>
        )}
        {summary && (
          <p>
            <strong>Summary : </strong>
            {summary && truncate(summary, 200)}
          </p>
        )}
        <div className="movie__Innercontainer">
          {language && (
            <p>
              <strong>Language : </strong>
              {language}
            </p>
          )}
          {releaseDate && (
            <p>
              <strong>Release Date : </strong>
              {releaseDate}
            </p>
          )}
          {rating && (
            <p>
              <strong>Rating : </strong>
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                starDimension="15px"
                numberOfStars={5}
                name="rating"
              />
            </p>
          )}
        </div>
      </motion.div>
      {selectedImg && (
        <motion.div
          className="backdrop"
          onClick={modalClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            src={selectedImg}
            alt=""
          />
        </motion.div>
      )}
    </>
  );
}

export default MovieParser;
