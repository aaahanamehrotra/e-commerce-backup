import { useSession } from "next-auth/react";
import Navbar from "../components/Navbar/Navbar";

function Cart() {
  const { data: session } = useSession();
  return (
    <>
      <Navbar session={session} />
      <h1>Cart</h1>
    </>
  );
}

export default Cart;
