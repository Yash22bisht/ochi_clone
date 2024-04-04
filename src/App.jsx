import React from "react";
import Navbar from "./components/navbar";
import Marque from "./components/marque";
import About from "./components/about";
import Landingpage from "./components/landingpage";
import Eyes from "./components/Eyes";
import Feature from "./components/featured";
import Cards from "./components/cards";
import Start from "./components/start";
import Footer from "./components/footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen text-white overflow-hidden  bg-zinc-900 no-scrollbar ">
      
      <Navbar/>
      <Landingpage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Start/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
