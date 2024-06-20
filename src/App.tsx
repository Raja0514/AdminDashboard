import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Suspense, lazy} from 'react';
import Loader from './components/Loader';
const Dashboard=lazy(()=>import("./pages/Dashboard"))
const Product=lazy(()=>import("./pages/Product"))
const Customer=lazy(()=>import("./pages/Customer"))
const Transcations=lazy(()=>import("./pages/Transaction"))
function App() {
  return (
    <Router>
      
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        <Route path="/admin/product" element={<Product/>}/>
        <Route path="/admin/transcation" element={<Transcations/>}/>
        <Route path="/admin/customer" element={<Customer/>}/>
      </Routes>
      </Suspense>
      
       {/* Charts */}
      {/* Apps */}
      
    </Router>
  )
}
export default App
