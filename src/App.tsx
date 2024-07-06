import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Coupon = lazy(() => import("./pages/apps/Coupon"));
const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Barchart = lazy(() => import("./pages/charts/Barchart"));

const Piechart = lazy(() => import("./pages/charts/Piechart"));
const Linechart = lazy(() => import("./pages/charts/Linechart"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transcations = lazy(() => import("./pages/Transaction"));
const Newproduct = lazy(() => import("./pages/management/NewProduct"));

const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TranscationManagement = lazy(
  () => import("./pages/management/TranscationManagement")
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>

          {/* main section */}

          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/product" element={<Product />} />
          <Route path="/admin/transcation" element={<Transcations />} />
          <Route path="/admin/customer" element={<Customer />} />

          {/* Charts */}

          <Route path="/admin/chart/bar" element={<Barchart />} />
          <Route path="/admin/chart/pie" element={<Piechart />} />
          <Route path="/admin/chart/line" element={<Linechart />} />

          {/* Management */}

          <Route path="/admin/product/new" element={<Newproduct />} />
          <Route path="/admin/product/:id" element={<ProductManagement />} />
          <Route
            path="/admin/transaction/:id"
            element={<TranscationManagement />}
          />

          {/* Apps */}

          <Route path="/admin/app/coupon" element={<Coupon/>} />
          <Route path="/admin/app/stopwatch" element={<StopWatch/>} />
          <Route path="/admin/app/toss" element={<Toss/>} />

        </Routes>

      </Suspense>
    </Router>
  );
}
export default App;
