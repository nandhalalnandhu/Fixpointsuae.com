import "./App.css";

import Main from "./components/Main/Main";

import Service from "./components/Service/Service";

import Conter from "./Conter/Conter";

import Calltoaction from "./components/Calltoaction/Calltoaction";
import Pricing from "./components/Pricing/Pricing";

import Testi from "./Testi/Testi";

import { FaQ } from "react-icons/fa6";
import Faq from "./components/Faq/Faq";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Footer/Footer";
import Navtop from "./components/Navbar/Navtop";
import Ourcli from "./components/OurClient/Ourcli";
import Teamm from "./components/Team/Teamm";
import Serrvicee from "./components/Service/Serrvicee";
import Lfooter from "./components/Lastfooter/Lfooter";

function App() {
  return (
    <div>
      <Navtop />
      <Navbar />
      <Main />
      <Conter />
      <Calltoaction />
      <Service />
      <Serrvicee />
      <Ourcli />
      <Pricing />
      <Teamm />
      <Testi />
      <Faq />
      <Footer />
      <Lfooter />
    </div>
  );
}

export default App;
