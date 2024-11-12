import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./modules/dashboard/Dashboard";
import AppLayout from "./api/layout/AppLayout";
import Customers from "./modules/customers/Customers";
import Products from "./modules/products/Products";
import Orders from "./modules/orders/Orders";
import Analytics from "./modules/analytics/Analytics";
import Chat from "./modules/chat/Chat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />}></Route>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="chat" element={<Chat />}>
              <Route path="/chat/:userId" element={<Chat />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
