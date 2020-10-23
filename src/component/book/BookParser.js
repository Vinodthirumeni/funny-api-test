import React, { useState } from "react";
import "./BookParser.css";
import ReadMoreReact from "read-more-react";
import GetAppIcon from "@material-ui/icons/GetApp";
import StarRatings from "react-star-ratings";
import iso3311a2 from "iso-3166-1-alpha-2";
import ISO6391 from "iso-639-1";

import { motion } from "framer-motion";

function BookParser({ items }) {
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
      <div className="bookParser">
        {items?.map((item) => (
          <div className="bookParser__container">
            {item?.volumeInfo?.imageLinks?.smallThumbnail && (
              <img
                onClick={() =>
                  setSelectedImg(item?.volumeInfo?.imageLinks?.smallThumbnail)
                }
                src={item?.volumeInfo?.imageLinks?.smallThumbnail}
                alt="#img"
              />
            )}
            {item?.volumeInfo?.title && (
              <p>
                <strong>Title : </strong>
                {item?.volumeInfo?.title}
              </p>
            )}
            {item?.volumeInfo?.subtitle && (
              <p>
                <strong>Sub Title : </strong>
                {item?.volumeInfo?.subtitle}
              </p>
            )}
            {item?.volumeInfo?.authors?.map((author) => (
              <p>
                <strong>Author : </strong>
                {author}
              </p>
            ))}
            {item?.volumeInfo?.publisher && (
              <p>
                <strong>Publisher : </strong>
                {item?.volumeInfo?.publisher}
              </p>
            )}
            {item?.volumeInfo?.publishedDate && (
              <p>
                <strong>Publish Date : </strong>
                {item?.volumeInfo?.publishedDate}
              </p>
            )}
            {item?.volumeInfo?.description && (
              <p>
                <strong>Description : </strong>
                <ReadMoreReact
                  text={item?.volumeInfo?.description}
                  min={80}
                  ideal={80}
                  max={150}
                  readMoreText="Read More..."
                />
              </p>
            )}
            <div className="bookParser__containerBottom">
              {item?.volumeInfo?.categories?.map((category) => (
                <p>
                  <strong>Category : </strong>
                  {category}
                </p>
              ))}
              {item?.volumeInfo?.pageCount && (
                <p>
                  <strong>Page Count : </strong>
                  {item?.volumeInfo?.pageCount}
                </p>
              )}
              {item?.volumeInfo?.printType && (
                <p>
                  <strong>Type : </strong>
                  {item?.volumeInfo?.printType}
                </p>
              )}

              {item?.volumeInfo?.readingModes?.text && (
                <p>
                  <strong>Reading Mode : </strong>
                  Text
                </p>
              )}

              {item?.volumeInfo?.readingModes?.image && (
                <p>
                  <strong>Reading Mode : </strong>
                  Image
                </p>
              )}

              {item?.volumeInfo?.language && (
                <p>
                  <strong>Language : </strong>

                  {ISO6391.getName(item?.volumeInfo?.language)}


                </p>
              )}
              {item?.saleInfo?.country && (
                <p>
                  <strong>Country : </strong>
                  {iso3311a2.getCountry(item?.saleInfo?.country)}
                </p>
              )}
              {item?.saleInfo?.saleability && (
                <p>
                  <strong>Saleability : </strong>
                  {item?.saleInfo?.saleability.replace(/_/g, " ")}
                </p>
              )}
              {item?.saleInfo?.listPrice?.amount && (
                <p>
                  <strong>Amount : </strong>
                  {item?.saleInfo?.listPrice?.amount}
                </p>
              )}
              {item?.saleInfo?.listPrice?.currencyCode && (
                <p>
                  <strong>Currency : </strong>
                  {item?.saleInfo?.listPrice?.currencyCode}
                </p>
              )}
              {item?.saleInfo?.retailPrice?.amount && (
                <p>
                  <strong>Amount : </strong>
                  {item?.saleInfo?.retailPrice?.amount}
                </p>
              )}
              {item?.saleInfo?.buylink && (
                <p>
                  <strong>Buy Link : </strong>
                  {item?.saleInfo?.buylink}
                </p>
              )}

              {item?.volumeInfo?.averageRating && (
                <p>
                  <strong>Rating : </strong>

                  <StarRatings
                    rating={item?.volumeInfo?.averageRating}
                    starRatedColor="gold"
                    starDimension="15px"
                    numberOfStars={5}
                    name="rating"
                  />
                </p>
              )}

              {item?.accessInfo?.pdf?.acsTokenLink && (
                <p className="bookParser__containerLink">
                  <strong>Pdf Link : </strong>
                  <a href={item?.accessInfo?.pdf?.acsTokenLink}>
                    <GetAppIcon />
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
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

export default BookParser;
