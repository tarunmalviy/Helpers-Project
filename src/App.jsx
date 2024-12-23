import "./App.css";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Statistic from "./Components/Statistic";
import ReferEarn from "./Components/ReferEarn";
import Team from "./Components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Statistic />
      <ReferEarn />
      <Team />
      <Footer />
    </>
  );
}

export default App;
