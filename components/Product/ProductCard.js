import Link from "next/link";
import Image from "next/image";

import cardStyles from "./ProductCard.module.css";

function ProductCard(props) {
  const products = props.data;
  return (
    <>
      {products.map((data) => (
        <div key={products.id} className={cardStyles.card}>
          <Image
            className={cardStyles.img}
            src={data.img}
            width="250"
            height="250"
            alt="product image"
          />
          <div className={cardStyles.texts}>
            <div className={cardStyles.title}>{data.name}</div>
            <div className={cardStyles.other}>{data.description}</div>
            <div className={cardStyles.other}>Price: {data.price}</div>
            <Link href={`/products/${data.id}`} className={cardStyles.link}>
              View
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
