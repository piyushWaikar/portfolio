import "./App.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallex from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero/>
      </section>
      <section id="Service"> <Parallex type="service" /> </section>
      <section> <Services/> </section>
      <section id="Portfolio"><Parallex type="portfolio" /></section>
      <Portfolio/>
      <section id="Contact"><Contact/></section>
      <ToastContainer />
    </div>
  );
};

export default App;
