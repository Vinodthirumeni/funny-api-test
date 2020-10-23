import React, { useState } from "react";
import "./MakeUpCard.css";
import { motion } from "framer-motion";

function MakeUpCard({
  id,
  api_featured_image,
  brand,
  name,
  price,
  price_sign,
  description,
  product_link,
  website_link,
  rating,
  category,
  product_type,
  tag_list,
  colors,
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
      <div className="makeUp__container">
        <div
          className="makeUp__container__Top"
          onClick={() => setSelectedImg(api_featured_image)}
        >
          <img
            className="makeUp__containerImage"
            src={api_featured_image}
            alt="#cosmetic"
          />
        </div>
        <div className="makeUp__container__Bottom">
          <div className="makeUp__container__Bottom__Top">
            <p>
              <strong>Product : </strong>
              {brand}
            </p>
            <p>
              <strong>Name : </strong>
              {name}
            </p>
            <p>
              <strong>Price : </strong>
              {price}
              <strong>{price_sign}</strong>
            </p>
          </div>
          <div className="makeUp__container__Bottom__Middle">
            {rating && (
              <p>
                <strong>Rating : </strong>
                {rating}
              </p>
            )}
            {category && (
              <p>
                <strong>Category : </strong>
                {category}
              </p>
            )}
            {product_type && (
              <p>
                <strong> Type : </strong>
                {product_type}
              </p>
            )}
          </div>
          <div className="makeUp__container__Bottom__Last">
            {description && truncate(description, 150)}
          </div>
          <div className="makeUp__container__Tags">
            {tag_list.length > 0 && <strong>Tags :&nbsp;</strong>}
            {tag_list.map((tag) => (
              <p>
                {tag}
                <span>,</span>
              </p>
            ))}
          </div>
          <div className="makeUp__container__Color">
            {colors.length > 0 && <strong>Available Colors :&nbsp;</strong>}
            <div className="makeUp__container__ColorPallete">
              {colors.map((clr) => (
                <p
                  style={{
                    margin: "3px",
                    height: "20px",
                    width: "40px",
                    background: `${clr.hex_value}`,
                  }}
                ></p>
              ))}
            </div>
          </div>
        </div>
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

export default MakeUpCard;
