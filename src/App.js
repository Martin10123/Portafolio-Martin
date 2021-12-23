import "./App.css";
import Navbar from "./components/Ui";
import HeaderScreen from "./components/Screen/Header";
import MainScreen from "./components/Screen/Main";
import FooterScreen from "./components/Footer";

function App() {
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
