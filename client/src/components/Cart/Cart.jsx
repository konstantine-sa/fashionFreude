import { useSelector } from "react-redux";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import classes from "./Cart.module.scss";
import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";
import PaymentIcon from "@mui/icons-material/Payment";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";

const Cart = ({ cartOpened, setCartOpened }) => {
  const [totalPrice, setTotalPrice] = useState();
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    const newTotalPrice = products.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [products]);

  return (
    <section className={classes.cart}>
      <h1>Produkte in Ihrem Warenkorb:</h1>

      <ClearIcon
        className={classes.closeIcon}
        onClick={() => setCartOpened(!cartOpened)}
      />

      {products.map((item) => (
        <div className={classes.item} key={item.id}>
          <img
            className={classes.img}
            src={import.meta.env.VITE_UPLOAD_URL + item.img}
            alt={item.title}
          />
          <div className={classes.details}>
            <h1>{item.title}</h1>
            <p className={classes.description}>
              {item.description?.substring(0, 100)}
            </p>
            <div className={classes.price}>
              {item.quantity} X {item.price} €
            </div>
          </div>

          <DeleteOutlineIcon className={classes.delete} />
        </div>
      ))}

      <hr />

      <div className={classes.total}>
        <span className={classes.subtotal}>Zwischensumme: </span>
        <span className={classes.totalPrice}>{totalPrice} </span>
        <span className={classes.eur}>€</span>
      </div>

      <ButtonBlue label="Zur Kasse" icon={<PaymentIcon />} />

      <div className={classes.reset}>
        <ClearIcon className={classes.clearIcon} />
        <p>Alle löschen</p>
      </div>
    </section>
  );
};

export default Cart;
