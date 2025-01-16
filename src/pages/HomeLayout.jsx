import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const HomeLayout = () => {
    return (
      <>
        <Header />
        <Navbar />
        <section className="align-element py-20">
        <Hero />
        <Outlet />
        </section>
      </>
    )
  }
export default HomeLayout;