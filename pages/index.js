import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
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
      <PizzaList />
    </div>
  );
}
