import { useState } from "react";
import searchStyles from "../styles/Search.module.css";
import { useSession } from "next-auth/react";
import ProductData from "../data/ProductData";
import ProductCard from "../components/Product/ProductCard";
import Navbar from "../components/Navbar/Navbar";

function Search({ res }) {
  const [search, setSearch] = useState("");
  const { data: session } = useSession;
  let data = res.filter((products) => {
    return products.name.toLowerCase().includes(search.toLowerCase()) == true;
  });

  return (
    <>
      <div className={searchStyles.search}>
        <form
          className={searchStyles.form}
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
        <div className={searchStyles.cards}>
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
