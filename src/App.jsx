import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

import HomeScreen from "./screens/HomeScreen";
import Navbar from "./Component/Navbar";
import { useContext } from "react";

function App() {
  return (
    <BrowserRouter>
      <>
        <header className="  bg-blue-400 font-bold p-2 text-white">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer>
          <div className="text-center  ">All rights reserved</div>
        </footer>
      </>
    </BrowserRouter>
  );
}

export default App;
