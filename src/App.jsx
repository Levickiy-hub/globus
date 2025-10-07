import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./widgets/Header";
import { HomePage } from "./pages/home/HomePage";
import { Catalog } from "./pages/catalog/Catalog";
import Footers from "./widgets/Footer";
import "./App.css";
import { NotFound } from "./pages/notFound/NotFound";

function App() {

  return (
    <Router>
      <Header></Header>
      <main style={{ padding: '0 60px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main >
      <Footers />
    </Router>
  )
}

export default App
