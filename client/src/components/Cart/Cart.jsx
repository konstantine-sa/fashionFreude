import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import classes from "./Cart.module.scss";
import ButtonBlue from "../../elements/ButtonBlue/ButtonBlue";
import PaymentIcon from "@mui/icons-material/Payment";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = ({ cartOpened, setCartOpened }) => {
  const data = [
    {
      id: 8,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      description:
        "Introducing our charming Retro Vintage Space Shuttle T-Shirts: Embrace classic NASA space graphics, featuring a stylish mix of iconic logos and letters. Elevate your wardrobe with this unique shirt, perfect for making a fashion statement while celebrating your love for space exploration. These adorable long-sleeve shirts are tailored for teenage girls who appreciate a touch of cuteness in their style! Dress to impress with our Space Shirt, a NASA-inspired tee that pairs seamlessly with a NASA hat, backpack, and jacket. Unleash your cosmic style and take popular strides in fashion with this specially crafted ensemble. Explore the universe of fashion with our Retro Vintage Space Shuttle T-Shirts, where comfort meets interstellar style.",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      description:
        "Introducing our charming Retro Vintage Space Shuttle T-Shirts: ",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <section className={classes.cart}>
      <h1>Produkte in Ihrem Warenkorb:</h1>

      <ClearIcon
        className={classes.closeIcon}
        onClick={() => setCartOpened(!cartOpened)}
      />

      {data.map((item) => (
        <div className={classes.item} key={item.id}>
          <img className={classes.img} src={item.img} alt={item.title} />
          <div className={classes.details}>
            <h1>{item.title}</h1>
            <p className={classes.description}>
              {item.description?.substring(0, 100)}
            </p>
            <div className={classes.price}>1 X {item.newPrice} €</div>
          </div>

          <DeleteOutlineIcon className={classes.delete} />
        </div>
      ))}

      <hr />

      <div className={classes.total}>
        <span className={classes.subtotal}>Zwischensumme:</span>
        <span className={classes.totalPrice}>124 </span>
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
