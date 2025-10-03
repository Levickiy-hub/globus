import { HomePage } from "./pages/home/HomePage";
import Header from "./widgets/Header";
import Footers from "./widgets/Footer";
import "./App.css";

function App() {

  return (
    <>
    <Header></Header>
      <div style={{padding:'0 60px'}}>
        <HomePage></HomePage>
      </div>
      <Footers/>
    </>
  )
}

export default App
