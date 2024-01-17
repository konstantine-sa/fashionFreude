import Card from "../Card/Card";
import classes from "./FeaturedProducts.module.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type, description }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <section className={classes.featuredProducts}>
      <div className={classes.top}>
        <h1>{type}</h1>
        <p>{description}</p>
      </div>
      <div className={classes.bottom}>
        {error
          ? error
          : loading
          ? "loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
