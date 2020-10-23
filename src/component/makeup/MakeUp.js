import React, { useState } from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import "./MakeUp.css";
import MakeUpCard from "./MakeUpCard";
import { motion } from "framer-motion";
import LoadingOverlay from "react-loading-overlay";

function MakeUp() {
  const brands = [
    { name: "Almay" },
    { name: "Slva" },
    { name: "Anna sui" },
    { name: "Annabelle" },
    { name: "Benefit" },
    { name: "Boosh" },
    { name: "Burt's bees" },
    { name: "Butter london" },
    { name: "C'est moi" },
    { name: "Cargo cosmetics" },
    { name: "China glaze" },
    { name: "Clinique" },
    { name: "Coastal classic creation" },
    { name: "Colourpop" },
    { name: "Covergirl" },
    { name: "Dalish" },
    { name: "Deciem" },
    { name: "Dior" },
    { name: "Dr. hauschka" },
    { name: "E.l.f." },
    { name: "Essie" },
    { name: "Fenty" },
    { name: "Glossier" },
    { name: "Green people" },
    { name: "Iman" },
    { name: "L'oreal" },
    { name: "Lotus cosmetics usa" },
    { name: "Maia's mineral galaxy" },
    { name: "Marcelle" },
    { name: "Marienatie" },
    { name: "Maybelline" },
    { name: "Milani" },
    { name: "Mineral fusion" },
    { name: "Misa" },
    { name: "Mistura" },
    { name: "Moov" },
    { name: "Nudus" },
    { name: "Nyx" },
    { name: "Orly" },
    { name: "Pacifica" },
    { name: "Penny lane organics" },
    { name: "Physicians formula" },
    { name: "Piggy paint" },
    { name: "Pure anada" },
    { name: "Rejuva minerals" },
    { name: "Revlon" },
    { name: "Sally b's skin yummies" },
    { name: "Salon perfect" },
    { name: "Sante" },
    { name: "Sinful colours" },
    { name: "Smashbox" },
    { name: "Stila" },
    { name: "Suncoat" },
    { name: "W3llpeople" },
    { name: "Wet n wild" },
    { name: "Zorah biocosmetiques" },
    { name: "Zorah" },
  ];
  const products = [
    { name: "Blush" },
    { name: "Bronzer" },
    { name: "Eyebrow" },
    { name: "Eyeliner" },
    { name: "Eyeshadow" },
    { name: "Foundation" },
    { name: "Lip liner" },
    { name: "Lipstick" },
    { name: "Mascara" },
    { name: "Nail polish" },
  ];
  const tags = [
    { name: "Alcohol free" },
    { name: "Canadian" },
    { name: "CertClean" },
    { name: "Chemical Free" },
    { name: "Cruelty free" },
    { name: "Dairy Free" },
    { name: "EcoCert" },
    { name: "EWG Verified" },
    { name: "Fair Trade" },
    { name: "Gluten Free" },
    { name: "Hypoallergenic" },
    { name: "Natural" },
    { name: "No Talc" },
    { name: "Non-GMO" },
    { name: "Oil free" },
    { name: "Organic" },
    { name: "Peanut Free Product" },
    { name: "Purpicks" },
    { name: "Sugar Free" },
    { name: "USDA Organic" },
    { name: "Vegan" },
    { name: "Water free" },
    { name: "Wilicone free" },
  ];
  const types = [
    { name: "Bb cc" },
    { name: "Concealer" },
    { name: "Contour" },
    { name: "Cream" },
    { name: "Gel" },
    { name: "Highlighter" },
    { name: "Lip gloss" },
    { name: "Lip stain" },
    { name: "Lipstick" },
    { name: "Liquid" },
    { name: "Mineral" },
    { name: "Palette" },
    { name: "Pencil" },
    { name: "Powder" },
    { name: "Others" },
  ];

  const [brand, setBrand] = useState([]);
  const [product, setProduct] = useState([]);
  const [tag, setTag] = useState([]);
  const [type, setType] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);
  const [loader, setLoader] = useState(false);

  const getByBrand = async (e) => {
    const brandName = e.target.value;
    setBrand(e.target.value);
    setProduct("");
    setTag("");
    setType("");
    setLoader(true);
    await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brandName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedBrand(data);
      });
    setLoader(false);
  };

  const getByProduct = async (e) => {
    const productName = e.target.value;
    setProduct(e.target.value);
    setBrand("");
    setTag("");
    setType("");
    setLoader(true);
    await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedBrand(data);
      });
    setLoader(false);
  };

  const getByTag = async (e) => {
    const tagName = e.target.value;
    setTag(e.target.value);
    setBrand("");
    setProduct("");
    setType("");
    setLoader(true);
    await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_tags=${tagName}`
    )
      .then((response) => response.json())
      .then((data) => {
        setSelectedBrand(data);
      });
    setLoader(false);
  };

  const getByType = async (e) => {
    const typeName = e.target.value;
    setType(e.target.value);
    setBrand("");
    setProduct("");
    setTag("");
    setLoader(true);
    const url =
      typeName === "Others"
        ? "http://makeup-api.herokuapp.com/api/v1/products.json?product_category="
        : `http://makeup-api.herokuapp.com/api/v1/products.json?product_category=${typeName}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSelectedBrand(data);
      });
    setLoader(false);
  };

  return (
    <LoadingOverlay
      active={loader}
      spinner
      text="Fetching your content from API..."
    >
      <div className="makeup">
        <h1> Welcome to Cosmetic shop </h1>

        <div className="makeup__filters">
          <FormControl>
            <InputLabel>Select a Brand</InputLabel>
            <Select varient="outlined" value={brand} onChange={getByBrand}>
              {brands?.map((brand) => (
                <MenuItem value={brand?.name}>{brand?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Select a Product</InputLabel>
            <Select varient="outlined" value={product} onChange={getByProduct}>
              {products?.map((product) => (
                <MenuItem value={product?.name}>{product?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Select a Tags</InputLabel>
            <Select varient="outlined" value={tag} onChange={getByTag}>
              {tags?.map((tag) => (
                <MenuItem value={tag?.name}>{tag?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Select a Type</InputLabel>
            <Select varient="outlined" value={type} onChange={getByType}>
              {types?.map((type) => (
                <MenuItem value={type?.name}>{type?.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <motion.div className="makeupcard" layout whileHover={{ opacity: 1 }}>
          {selectedBrand.map((cosmetic) => (
            <MakeUpCard
              id={cosmetic?.id}
              api_featured_image={cosmetic?.api_featured_image}
              brand={cosmetic?.brand}
              name={cosmetic?.name}
              price={cosmetic?.price}
              price_sign={cosmetic?.price_sign}
              description={cosmetic?.description}
              product_link={cosmetic?.product_link}
              website_link={cosmetic?.website_link}
              rating={cosmetic?.rating}
              category={cosmetic?.category}
              product_type={cosmetic?.product_type}
              tag_list={cosmetic?.tag_list}
              colors={cosmetic?.product_colors}
            />
          ))}
        </motion.div>
      </div>
    </LoadingOverlay>
  );
}

export default MakeUp;
