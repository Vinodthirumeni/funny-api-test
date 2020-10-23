import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TvParser.css";
import StarRatings from "react-star-ratings";

function TvParser({
  URL,
  name,
  type,
  language,
  geners,
  status,
  runtime,
  releaseDate,
  rating,
  tvName,
  country,
  image,
  summary,
  birthDate,
  deathDate,
  gender,
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
      <motion.div className="tv__container">
        {image?.medium && (
          <img
            onClick={() => setSelectedImg(image?.medium)}
            src={image?.medium}
            alt="#Tv"
          />
        )}
        {name && (
          <p className="tv__containerName">
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
        <div className="tv__Innercontainer">
          {type && (
            <p>
              <strong>Type : </strong>
              {type}
            </p>
          )}
          {language && (
            <p>
              <strong>Language : </strong>
              {language}
            </p>
          )}
          {geners && (
            <p>
              <strong>Geners : </strong>
              {geners}
            </p>
          )}
          {status && (
            <p>
              <strong>Status : </strong>
              <span>{status}</span>
            </p>
          )}

          {runtime && (
            <p>
              <strong>Runtime : </strong>
              {runtime}
            </p>
          )}
          {releaseDate && (
            <p>
              <strong>Release Date : </strong>
              {releaseDate}
            </p>
          )}

          {tvName && (
            <p>
              <strong>Tv : </strong>
              {tvName}
            </p>
          )}

          {birthDate && (
            <p>
              <strong>Birth Date : </strong>
              {birthDate}
            </p>
          )}

          {deathDate && (
            <p>
              <strong>Death Date : </strong>
              {deathDate}
            </p>
          )}

          {gender && (
            <p>
              <strong>Gender : </strong>
              {gender}
            </p>
          )}

          {country && (
            <p>
              <strong>Country : </strong>
              {country}
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

export default TvParser;
