import { Link } from "react-router-dom";

import classes from "./Card.module.scss";

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`} className={classes.link}>
      <div className={classes.card}>
        <div className={classes.image}>
          <img
            src={item.img}
            alt={`${item.title} photo`}
            className={classes.mainImage}
          ></img>

          {/* new label */}
          {item.isNew && <span className={classes.new}>Neuheit</span>}

          <img
            src={item.img2}
            alt={`${item.title} photo`}
            className={classes.secondImage}
          ></img>
        </div>

        <p className={classes.title}>{item.title}</p>

        <div className={classes.prices}>
          <p className={classes.oldPrice}>{item.oldPrice} €</p>
          <p className={classes.newPrice}>{item.newPrice} €</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
