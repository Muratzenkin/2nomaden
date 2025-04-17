import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import MigrationFooter from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Services from "./components/dienst/Services.jsx";
import Product from "./components/product/Product.jsx";
import PrivacyPolicy from "./components/footer/PrivacyPolicy.jsx";
import Impressum from "./components/footer/Impressum.jsx";
import TermsOfService from "./components/footer/TermsOfService.jsx";

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <MigrationFooter />
    </>
  );
}

export default App;
