import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";

import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <>
        <header className="bg-blue-400 font-bold p-2 text-white">
          <Link to="/">Marley</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
