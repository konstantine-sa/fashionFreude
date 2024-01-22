import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classes from "./Navbar.module.scss";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Backdrop from "../../elements/Backdrop/Backdrop";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        {/* Nav left */}
        <div className={classes.left}>
          <Link className={classes.link} to="/">
            Fashion Freunde
          </Link>
        </div>

        {/* Nav center */}
        <div className={classes.center}>
          <div className={classes.item}>
            <Link className={classes.link} to="/products/1">
              Damen
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="/products/2">
              Herren
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="/products/3">
              Sales
            </Link>
          </div>
        </div>

        {/* Nav right */}
        <div className={classes.right}>
          <div className={classes.item}>
            <Link className={classes.link} to="/">
              Startseite
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="/">
              Über uns
            </Link>
          </div>
          <div className={classes.item}>
            <Link className={classes.link} to="/">
              Kontakt
            </Link>
          </div>

          {/* icons */}
          <div className={classes.icons}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />

            {/* cart icon */}
            <div
              className={classes.cartIcon}
              onClick={() => setCartOpened(!cartOpened)}
            >
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* cart component render */}
      {cartOpened && (
        <>
          <Cart cartOpened={cartOpened} setCartOpened={setCartOpened} />
          <Backdrop cartOpened={cartOpened} setCartOpened={setCartOpened} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
