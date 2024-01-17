import { Link } from "react-router-dom";

import classes from "./Card.module.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className={classes.link}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            alt={`${item.title} photo`}
            className={classes.mainImage}
          ></img>

          {/* new label */}
          {item?.attributes?.isNew && (
            <span className={classes.new}>Neuheit</span>
          )}

          <img
            src={
              import.meta.env.VITE_UPLOAD_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            alt={`${item?.attributes?.title} photo`}
            className={classes.secondImage}
          ></img>
        </div>

        <p className={classes.brand}>{item?.attributes?.brand}</p>

        <p className={classes.title}>{item?.attributes?.title}</p>

        <div className={classes.prices}>
          <p className={classes.newPrice}>{item?.attributes?.price} €</p>

          {item?.attributes?.oldPrice ? (
            <p className={classes.oldPrice}>{item?.attributes?.oldPrice} €</p>
          ) : (
            ""
          )}
        </div>
      </div>
    </Link>
  );
};

export default Card;
