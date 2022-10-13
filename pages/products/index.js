import productsStyles from "../../styles/Products.module.css";

import ProductData from "../../data/ProductData";
import ProductCard from "../../components/Product/ProductCard";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar/Navbar";

function Products() {
  const { data: session } = useSession;
  return (
    <>

      <div className={productsStyles.products}>
        <h1>Our Products</h1>
        <div className={productsStyles.cards}>
          <ProductCard data={ProductData} />
        </div>
      </div>
    </>
  );
}

export default Products;
