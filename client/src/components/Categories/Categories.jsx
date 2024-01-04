import { Link } from "react-router-dom";

import classes from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={classes.container}>
      <div className={classes.sale}>
        <img
          src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          sale
        </Link>
      </div>
      <div className={classes.women}>
        <img
          src="https://images.pexels.com/photos/5775964/pexels-photo-5775964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          women
        </Link>
      </div>

      <div className={classes.newSeason}>
        <img
          src="https://cdn.pixabay.com/photo/2021/06/28/06/53/girl-6370741_1280.jpg"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          new Season
        </Link>
      </div>

      <div className={classes.men}>
        <img
          src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          men
        </Link>
      </div>
      <div className={classes.accessories}>
        <img
          src="https://freedesignfile.com/upload/2017/06/Fashion-design-female-accessories-Stock-Photo-05.jpg"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          accessories
        </Link>
      </div>
      <div className={classes.shoes}>
        <img
          src="https://freedesignfile.com/upload/2018/12/Legs-with-trendy-shoes-Stock-Photo-10.jpg"
          alt="photo"
        />

        <Link className={classes.link} to="/products/1">
          shoes
        </Link>
      </div>
    </div>
  );
};

export default Categories;
