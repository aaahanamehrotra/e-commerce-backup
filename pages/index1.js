import { useSession, signIn, signOut } from "next-auth/react";
import Dashboard from "../components/dashboard";
import Singup from "../components/singup";
import Navbar from "../components/Navbar/Navbar";
import ProductCard from "../components/Product/ProductCard";
import ProductData from "../data/ProductData";
import homeStyles from "../styles/Home.module.css";
import Link from "next/link";
import AchievementsData from "../data/AchievementsData";
import Image from "next/image";

export default function Component() {
  const { data: session } = useSession();
  const productdata = [];

  for (let i = 0; i <= 3; i++) {
    productdata.push(ProductData[i]);
  }

  const num = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <>
      <Navbar session={session} />

      <div className={homeStyles.intro}>
        <div className={homeStyles.text}>
          <h1 className={homeStyles.title}>Lorem Ipsum</h1>
          <h2 className={homeStyles.about}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dui
            vivamus arcu felis bibendum ut tristique et egestas.
          </h2>
          <div className={homeStyles.buttons}>
            <Link href="/login">Sign Up</Link>
            <Link href="/products/">Products</Link>
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
          {AchievementsData.map((data) => (
            <div key="1" className={homeStyles.aCard}>
              <div className={homeStyles.aValue}>{data.value}</div>
              <div className={homeStyles.aName}>{data.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={homeStyles.products}>
        <h1 className={homeStyles.pTitle}>Popular Products</h1>
        <div className={homeStyles.pCards}>
          <ProductCard data={productdata} />
        </div>
      </div>
    </>
  );
}
