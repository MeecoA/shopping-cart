import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import "./styles/style.css";
const RouteSwitch = () => {
  return (
    <>
      <HashRouter basename="/">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default RouteSwitch;
