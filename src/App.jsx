import { Route, Routes, BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import ProductsDetail from "./pages/ProductsDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/products" Component={ProductsPage} />
          <Route path="/about-us" Component={AboutUs} />
          <Route path="/products/:id" Component={ProductsDetail} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
