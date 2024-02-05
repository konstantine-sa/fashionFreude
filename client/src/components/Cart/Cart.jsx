import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import classes from "./Cart.module.scss";
import { addToCart, removeItem, resetCart } from "../../redux/CartReducer";
import { loadStripe } from "@stripe/stripe-js";

import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";
import PaymentIcon from "@mui/icons-material/Payment";
import ClearIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";
import makeRequest from "../../makeRequest";

const Cart = ({ cartOpened, setCartOpened }) => {
  const [totalPrice, setTotalPrice] = useState();
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const newTotalPrice = products.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setTotalPrice(newTotalPrice.toFixed(2));
  }, [products]);

  const decreaseQuantity = (itemId) => {
    const currentItem = products.find((item) => item.id === itemId);

    if (currentItem && currentItem.quantity > 1) {
      dispatch(addToCart({ id: itemId, quantity: -1 }));
    }
  };
  const increaseQuantity = (itemId) => {
    dispatch(addToCart({ id: itemId, quantity: 1 }));
  };

  const stripePromise = loadStripe(
    "pk_test_51OQZ53G2M1I8j4r5MYb9gr5dcSEwAr1cL1cOxomesjKwgEL6hYtEb9tMqeE5gr031TdW76vxdVPbvociK3Gev3UU00tvmt9bs1"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", {
        products,
      });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={classes.cart}>
      {products.length > 0 ? (
        <>
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

              <div className={classes.quantity}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <DeleteOutlineIcon
                className={classes.delete}
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}

          <hr />

          <div className={classes.total}>
            <span className={classes.subtotal}>Zwischensumme: </span>
            <span className={classes.totalPrice}>{totalPrice} </span>
            <span className={classes.eur}>€</span>
          </div>

          <ButtonBlue
            label="Zur Kasse"
            icon={<PaymentIcon />}
            onClick={() => handlePayment()}
          />

          <div className={classes.reset} onClick={() => dispatch(resetCart())}>
            <ClearIcon className={classes.clearIcon} />
            <p>Alle löschen</p>
          </div>
        </>
      ) : (
        <div className={classes.emptyCart}>
          <ClearIcon
            className={classes.closeIcon}
            onClick={() => setCartOpened(!cartOpened)}
          />
          <img src="/img/empty_cart.png" />
          <p>Ihr Warenkorb ist derzeit leer</p>
          <div className={classes.buttonShop}>
            <Link to="/products/1">
              <ButtonBlue
                label="Jetzt einkaufen"
                onClick={() => setCartOpened(!cartOpened)}
              />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
