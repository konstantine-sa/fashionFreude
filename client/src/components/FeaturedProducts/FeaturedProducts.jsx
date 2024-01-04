import Card from "../Card/Card";
import classes from "./FeaturedProducts.module.scss";

const FeaturedProducts = ({ type, description }) => {
  const data = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",

      title: "Long Sleeve NASA T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <section className={classes.featuredProducts}>
      <div className={classes.top}>
        <h1>{type}</h1>
        <p>{description}</p>
      </div>
      <div className={classes.bottom}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
