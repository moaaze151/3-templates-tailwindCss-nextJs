// import styles from "../styles/Home.module.css";
import Head from "next/head";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import TeamMembers from "../components/TeamMembers";
import Services from "../components/Services";
import Skills from "../components/Skills";
import HowWorks from "../components/HowWorks";
import Events from "../components/Events";
import Pricing from "../components/Pricing";
import Videos from "../components/Videos";
import State from "../components/State";
import Discount from "../components/Discount";
import MyFooter from "../components/MyFooter";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Template3 | next-tailwind</title>
      </Head>
      <Navbar />
      <Banner />
      <Articles/>
      <Gallery/>
      <Features/>
      <Testimonials/>
      <TeamMembers/>
      <Services/>
      <Skills/>
      <HowWorks/>
      <Events/>
      <Pricing/>
      <Videos/>
      <State/>
      <Discount/>
      <MyFooter/>
    </div>
  );
}
