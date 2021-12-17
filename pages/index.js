// import styles from "../styles/Home.module.css";
import Head from "next/head";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Template3 | next-tailwind</title>
      </Head>
      <Navbar />
      <Banner />
      <Articles/>
    </div>
  );
}
