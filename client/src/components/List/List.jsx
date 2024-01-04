import classes from "./List.module.scss";
import Card from "../Card/Card";

const List = () => {
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
    {
      id: 5,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 6,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 7,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 8,
      img: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/615qo2VmLpL._AC_SY550_.jpg",
      img2: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61nWKT0lxpL._AC_SY550_.jpg",
      title: "Long Sleeve NASA T-Shirt",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

  return (
    <div className={classes.list}>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
