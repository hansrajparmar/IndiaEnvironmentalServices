import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Services from "./components/Services";
import Contact from "./components/Contact";


import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/products.scss"
import "./styles/services.scss"
import "./styles/contact.scss"
import "./styles/mediaquery.scss"

function App() {
  return (  

    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        <Footer/>
    </Router>

  );
}

export default App;