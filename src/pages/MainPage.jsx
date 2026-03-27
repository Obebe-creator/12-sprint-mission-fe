import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MainPage() {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <Header />
      <div>MainPage</div>
      <Footer />
    </div>
  );
}

export default MainPage;
