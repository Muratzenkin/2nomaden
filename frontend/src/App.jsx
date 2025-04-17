import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import MigrationFooter from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Services from "./components/dienst/Services.jsx";
import Product from "./components/product/Product.jsx";

function App() {
  return (
    <>
      {/* TODO burada sikinti var nav basmiyor */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MigrationFooter />
    </>
  );
}

export default App;
