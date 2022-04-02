import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home({ pizzaList }) {
  return (
    <div>
      <Head>
        <title>Pizza Mania Online Website</title>
        <meta
          name="description"
          content="Order online Your Favorite Pizza Today!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
