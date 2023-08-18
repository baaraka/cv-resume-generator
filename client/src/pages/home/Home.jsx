import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Why from "../../components/why/Why";
import Resume from "../../components/resume/Resume";
import Details from "../../components/details/Details";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <NavBar />
      <Header />
      <About />
      <Why />
      <Resume />
      <Details />
      <Footer />
    </div>
  );
}

export default Home;
