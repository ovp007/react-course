import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />}></Route>
          <Route path="cities" element={<CityList />}></Route>
          <Route path="cities/:id" element={<City />}></Route>
          <Route path="coutries" element={<CountryList />}></Route>
          <Route path="form" element={<p>form</p>}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
