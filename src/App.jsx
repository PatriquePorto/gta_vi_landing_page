import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
    </main>
  );
};

export default App;
