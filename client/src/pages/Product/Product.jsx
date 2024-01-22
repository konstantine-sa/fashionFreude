import { useState } from "react";
import useFetch from "../../hooks/useFetch";

import classes from "./Product.module.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";
import { useParams } from "react-router-dom";
import { convertLength } from "@mui/material/styles/cssUtils";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/CartReducer";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const id = useParams().id;

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  let images = [];

  data.length !== 0 ? (images = data.attributes.galery.data) : [];

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
        <p className={classes.brandName}>
          <span>Marke: </span>
          {data?.attributes?.brand}
        </p>

        <h1 className={classes.title}>{data?.attributes?.title}</h1>

        <div className={classes.priceContainer}>
          <span className={classes.price}>{data?.attributes?.price} €</span>

          {data?.attributes?.oldPrice ? (
            <span className={classes.priceOld}>
              {data?.attributes?.oldPrice} €
            </span>
          ) : (
            ""
          )}
        </div>
        <p className={classes.description}>{data?.attributes?.desc}</p>
        <div className={classes.quantity}>
          <button
            onClick={() => setQuantity((prev) => (prev > 0 ? prev - 1 : prev))}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <ButtonBlue
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
          label="in den warenkorb"
          icon={<AddShoppingCartIcon />}
        />
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
          <span className={classes.seller}>
            Anbieter: {data?.attributes?.brand}{" "}
          </span>
          <span className={classes.productType}>
            {`Produkttyp: 
            ${data?.attributes?.sub_categories?.data[0]?.attributes?.title}`}
          </span>
        </div>
        <hr />
        <div className={classes.info}>
          <h3>Über diesen Artikel</h3>
          <div className={classes.aboutItem}>
            <ul>
              {data?.attributes?.aboutItem
                ?.split("\n")
                .filter((sentence) => sentence.trim() !== "")
                .map((sentence, index) => (
                  <li key={index}>{sentence.trim().replace(/^(-\s*)/, "")}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
