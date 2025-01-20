import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Navbar/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
