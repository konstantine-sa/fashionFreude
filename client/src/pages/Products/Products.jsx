import { useParams } from "react-router-dom";

import List from "../../components/List/List";
import classes from "./Products.module.scss";
import { useState } from "react";

const Products = () => {
  const catId = parseInt(useParams().id);

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <section className={classes.products}>
      {/* left panel */}
      <div className={classes.left}>
        <div className={classes.filterItem}>
          <h2>Produktkategoriens</h2>
          <div className={classes.inputItem}>
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Shuhe</label>
          </div>
          <div className={classes.inputItem}>
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Röcke</label>
          </div>
          <div className={classes.inputItem}>
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Mäntel</label>
          </div>
        </div>

        <div className={classes.filterItem}>
          <h2>Filtern nach Preis</h2>
          <div className={classes.inputItem}>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              step={10}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
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
              onChange={(e) => setSort(desc)}
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

        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </section>
  );
};

export default Products;
