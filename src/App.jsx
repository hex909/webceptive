import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import RelatedPro from "./components/RelatedPro";

import "./styles/index.scss";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <Product />
      <RelatedPro />
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
