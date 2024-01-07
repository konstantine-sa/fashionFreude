import { useState } from "react";

import classes from "./Product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";

const Product = () => {
  const images = [
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71fHRjCRHrL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61k7PzOpm5L._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/618oFOQ+KwL._AC_SY550_.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);

  return (
    <section className={classes.product}>
      {/* left section */}
      <div className={classes.left}>
        <div className={classes.images}>
          {images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              onClick={() => setSelectedImage(index)}
              className={index === selectedImage ? classes.selected : ""}
            />
          ))}
        </div>

        <div className={classes.mainImage}>
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>

      {/* right section */}
      <div className={classes.right}>
        <h1>Title</h1>
        <span className={classes.price}>100 €</span>
        <p className={classes.description}>
          Ezcosplay Rundhalsausschnitt Langarm Buchstaben bedrucktes Shirt
          Grafik Tee Tops für Frauen
        </p>

        <div className={classes.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>

        <ButtonBlue label="hinzufügen" icon={<AddShoppingCartIcon />} />

        <div className={classes.links}>
          <div className={classes.item}>
            <FavoriteBorderIcon /> Zur Wunschliste hinzufügen
          </div>

          <div className={classes.item}>
            <BalanceIcon />
            Zum Vergleich hinzufügen
          </div>
        </div>

        <div className={classes.info}>
          <span>Anbieter: Ezcosplay </span>
          <span>Produkttyp: T-Shirt</span>
          <span>Tag: T-Shirt, Damen, Oberteil</span>
        </div>
        <hr />
        <div className={classes.info}>
          <span>Beschreibung</span>
          <hr />
          <span>Zusätzliche Informationen</span>
          <hr />
          <span>Häufig gestellte Fragen (FAQ)</span>
        </div>
      </div>
    </section>
  );
};

export default Product;
