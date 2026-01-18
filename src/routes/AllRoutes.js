import { Routes, Route } from "react-router-dom";
import { Home, Cart } from "../pages";

export function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
