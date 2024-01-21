import { useParams } from "react-router-dom";

import List from "../../components/List/List";
import classes from "./Products.module.scss";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(500);
  const [sort, setSort] = useState("desc");

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  return (
    <section className={classes.products}>
      {/* left panel */}
      <div className={classes.left}>
        <div className={classes.filterItem}>
          <h2>Produktkategoriens</h2>
          {data.map((item) => (
            <div className={classes.inputItem} key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className={classes.filterItem}>
          <h2>Filtern nach Preis</h2>
          <div className={classes.inputItem}>
            <span>0 €</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              step={10}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice} €</span>
          </div>
        </div>

        <div className={classes.filterItem}>
          <h2>Sortieren nach</h2>
          <div className={classes.inputItem}>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Preis (niedrigster zuerst)</label>
          </div>
          <div className={classes.inputItem}>
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Preis (höchster zuerst)</label>
          </div>
        </div>
      </div>

      {/* right panel */}
      <div className={classes.right}>
        <img
          className={classes.categoryImage}
          src="https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="categories banner photo"
        />

        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </section>
  );
};

export default Products;
