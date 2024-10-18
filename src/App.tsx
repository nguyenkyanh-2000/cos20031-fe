import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import AppLayout from "./components/layout/AppLayout";
import Customers from "./components/customers/Customers";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";
import Analytics from "./components/analytics/Analytics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />}></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
