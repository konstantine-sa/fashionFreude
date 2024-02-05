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
  const [mobNavIsOpened, setMobNavIsOpened] = useState(false);

  return (
    <nav className={classes.navbar}>
      {/* desktop menu */}

      <div className={classes.desktopNav}>
        {/* Logo*/}
        <div className={classes.logo}>
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

      {/* mobile menu */}
      <div className={classes.mobileContainer}>
        <div
          className={`${classes.mobileNav} ${
            mobNavIsOpened ? classes.active : ""
          }`}
        >
          <ul className={classes.navList}>
            <p className={classes.title}>Categories</p>
            <ul className={classes.navCategories}>
              <li className={classes.navItem}>Men</li>
              <li className={classes.navItem}>Women</li>
              <li className={classes.navItem}>Accessories</li>
              <li className={classes.navItem}>Shoes</li>
              <li className={classes.navItem}>Sales</li>
              <li className={classes.navItem}>New season</li>
            </ul>

            <p className={classes.title}>Über uns</p>
            <p className={classes.title}>Kontakt</p>
          </ul>
        </div>

        <div className={classes.logo}>
          <Link className={classes.link} to="/">
            Fashion Freunde
          </Link>
        </div>

        <button
          className={classes.hamburgerButton}
          onClick={() => setMobNavIsOpened(!mobNavIsOpened)}
        >
          menu
        </button>
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
