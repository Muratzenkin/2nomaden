import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Home from "./components/Home.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";
import MigrationFooter from "./components/footer/Footer.jsx";

function App() {
  return (
    <>
      {/* TODO burada sikinti var nav basmiyor */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <MigrationFooter />
    </>
  );
}

export default App;
