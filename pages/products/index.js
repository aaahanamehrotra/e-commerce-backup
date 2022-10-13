import productsStyles from "../../styles/Products.module.css";

import ProductData from "../../data/ProductData";
import ProductCard from "../../components/Product/ProductCard";

import { useState } from "react";

function Search({ res }) {
  const [search, setSearch] = useState("");
  let data = res.filter((products) => {
    return products.name.toLowerCase().includes(search.toLowerCase()) == true;
  });

  return (
    <>
      <div className={productsStyles.search}>
        <form
          className={productsStyles.form}
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search">Search</label>
          <input
            type="text"
            name="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <div className={productsStyles.cards}>
          <ProductCard data={data} />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = (context) => {
  const res = ProductData;

  return {
    props: {
      res,
    },
  };
};

export default Search;
