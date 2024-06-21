import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transcations = lazy(() => import("./pages/Transaction"));

const Newproduct = lazy(() => import("./pages/management/NewProduct"));

const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));

const TranscationManagement = lazy(() => import("./pages/management/TranscationManagement"));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transcation" element={<Transcations />} />
          <Route path="/admin/customer" element={<Customer />} />

          {/* Charts */}
          {/* Apps */}

          {/* Management */}

          <Route path="/admin/product/new" element={<Newproduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement/>} />
          <Route path="/admin/transaction/:id" element={<TranscationManagement/>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
export default App;
