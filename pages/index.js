import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import homeStyles from "../styles/Home.module.css";

import ProductCard from "../components/Product/ProductCard";
import ProductData from "../data/ProductData";
import AchievementData from "../data/AchievementsData";

export default function Home() {
  const { data: session } = useSession();
  const data = [];

  for (let i = 0; i <= 3; i++) {
    data.push(ProductData[i]);
  }

  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <div className={homeStyles.intro}>
        <div className={homeStyles.text}>
          <h1 className={homeStyles.title}>Lorem Ipsum</h1>
          <h2 className={homeStyles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui
            vivamus arcu felis bibendum ut tristique et egestas.
          </h2>
          <div className={homeStyles.buttons}>
            {session ? (
              <button onClick={() => signOut()} className={homeStyles.sign}>
                Sign out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                type="submit"
                className={homeStyles.sign}
              >
                Sign in
              </button>
            )}
            <Link href="/products/" className={homeStyles.productsbutton}>
              Products
            </Link>
          </div>
        </div>
        <Image
          className={homeStyles.img}
          alt="product images"
          src={`/${num(1, 10)}.jpeg`}
          height="500"
          width="450"
        />
      </div>
      <div className={homeStyles.achievements}>
        <h1 className={homeStyles.aTitle}>Achievements</h1>
        <div className={homeStyles.aCards}>
          {AchievementData.map((data) => (
            <div key="1" className={homeStyles.aCard}>
              <div className={homeStyles.aValue}>{data.value}</div>
              <div className={homeStyles.aName}>{data.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={homeStyles.products}>
        <h1 className={homeStyles.aTitle}>Popular Products</h1>
        <div className={homeStyles.pCards}>
          <ProductCard data={data} />
        </div>
      </div>
    </>
  );
}
