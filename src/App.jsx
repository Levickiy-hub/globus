import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./widgets/Header/Header";
import { HomePage } from "./pages/home/HomePage";
import { Catalog } from "./pages/catalog/Catalog";
import Footers from "./widgets/Footer/Footer";
import "./App.css";
import { NotFound } from "./pages/notFound/NotFound";
import { SubCatalog } from "./pages/subCatalog/SubCatalog";
import { Product } from "./pages/product/Product";

function App() {

  return (
    <Router>
      <Header></Header>
      <main style={{ padding: '190px 60px 0 60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:name" element={<SubCatalog />} />
          <Route path="/catalog/:name/:productname" element={<Product />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main >
      <Footers />
    </Router>
  )
}

export default App
