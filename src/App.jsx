import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
