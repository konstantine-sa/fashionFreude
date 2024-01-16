import { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card/Card";
import classes from "./FeaturedProducts.module.scss";

const FeaturedProducts = ({ type, description }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/products?populate=*`,
          {
            headers: {
              Authorization: `bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
          }
        );
        setProducts(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={classes.featuredProducts}>
      <div className={classes.top}>
        <h1>{type}</h1>
        <p>{description}</p>
      </div>
      <div className={classes.bottom}>
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
