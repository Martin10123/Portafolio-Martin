import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Ui";
import HeaderScreen from "./components/Screen/Header";
import MainScreen from "./components/Screen/Main";
import FooterScreen from "./components/Footer";

import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="background_black"></div>
      <Navbar />
      <HeaderScreen />
      <MainScreen />
      <FooterScreen />
    </>
  );
}

export default App;
