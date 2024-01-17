import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import classes from "./Product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";
import { useParams } from "react-router-dom";
import { convertLength } from "@mui/material/styles/cssUtils";

const Product = () => {
  // const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  let images = [];

  data.length !== 0 ? (images = data.attributes.galery.data) : [];

  console.log(images[selectedImage]?.attributes?.url);

  return (
    <section className={classes.product}>
      {/* left section */}
      <div className={classes.left}>
        <div className={classes.images}>
          {images?.map((image, index) => (
            <img
              key={index}
              src={import.meta.env.VITE_UPLOAD_URL + image.attributes.url}
              alt=""
              onClick={() => setSelectedImage(index)}
              className={index === selectedImage ? classes.selected : ""}
            />
          ))}
        </div>

        <div className={classes.mainImage}>
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              images[selectedImage]?.attributes?.url
            }
            alt=""
          />
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
