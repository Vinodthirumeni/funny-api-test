import React, { useState } from "react";
import "./HintsParsed.css";
import { motion } from "framer-motion";

function HintsParsed({ food, measures }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const modalClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null);
    }
  };

  return (
    <>
      <div className="hintsParsed">
        {food?.label && (
          <p>
            <strong>Label : </strong>
            {food?.label}
          </p>
        )}
        {food?.category && (
          <p>
            <strong>Category : </strong>
            {food?.category}
          </p>
        )}
        {food?.image ? (
          <img
            onClick={() => setSelectedImg(food?.image)}
            src={food?.image}
            alt="#img"
          />
        ) : (
          <img
            onClick={() =>
              setSelectedImg(
                "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
              )
            }
            src="https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
            alt="#img"
          />
        )}
        {food?.foodContentsLabel && (
          <p>
            <strong>Ingredients : </strong>
            {food?.foodContentsLabel}
          </p>
        )}
        <p>
          <strong>Energy KCal : </strong>
          {food.nutrients.ENERC_KCAL} %
        </p>
        <p>
          <strong>Protien : </strong>
          {food.nutrients.PROCNT} %
        </p>
        <p>
          <strong>Fat : </strong>
          {food.nutrients.FAT} %
        </p>
        <p>
          <strong>Calories : </strong>
          {food.nutrients.CHOCDF} %
        </p>
        <p>
          <strong>Fiber : </strong>
          {food.nutrients.FIBTG} %
        </p>
      </div>
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

export default HintsParsed;
