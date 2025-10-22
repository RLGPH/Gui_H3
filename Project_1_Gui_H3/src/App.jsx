import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import holdup from "/holdup.jpg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";

function App() {
  return (
    <>
      <div>  
        <Header name="Casper Simon Jensen" />
        <InfoCard
          hobbyOne="Gaming"
          hobbyTwo="Gå tur med hunde"
          hobbyThree="... jeg er kedelig XD"
          imageSrc={holdup}
        />
        <Footer age="21" />
      </div>
    </>
  );
}

export default App;
