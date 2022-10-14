import Image from "next/image";
import productStyles from "../../styles/Product.module.css";
import ProductData from "../../data/ProductData";

function Product({ data }) {
  return (
    <>
      <div key={data.id} className={productStyles.product}>
        <Image
          src={data.img}
          width="350"
          height="400"
          alt="product image"
          className={productStyles.img}
        />
        <div className={productStyles.info}>
          <h1 className={productStyles.h1}>{data.name}</h1>
          <h2 className={productStyles.h2}>{data.description}</h2>
          <h3 className={productStyles.h3}>{data.largeDescription}</h3>
          <hr />
          <h4>Price: {data.price}</h4>
          <h4>Stock: {data.stock}</h4>
          <button className={productStyles.button}>Order Now</button>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = (context) => {
  const res = ProductData;

  const data = res[context.params.id];

  return {
    props: {
      data,
    },
  };
};

export default Product;
