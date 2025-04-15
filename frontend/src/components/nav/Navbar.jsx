import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/icon/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/services", label: "HİZMETLERİMİZ" },
    { path: "/products", label: "ÜRÜNLERİMİZ" },
    { path: "/about", label: "HAKKIMIZDA" },
    { path: "/blog", label: "BLOG" },
  ];

  // Scroll efekti
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg = isScrolled
    ? "bg-white shadow-md"
    : "bg-brand-background/80 backdrop-blur-sm";
  const textColor = isScrolled ? "text-brand-primary" : "text-brand-text";
  const buttonStyle = isScrolled
    ? "bg-brand-primary text-brand-text hover:bg-brand-primary/90"
    : "bg-white/20 text-brand-text hover:bg-white/30 border border-white/30";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className={`flex items-center gap-3 text-2xl font-extrabold font-serif ${textColor}`}
        >
          <img src={Logo} alt="logo" className="w-12 h-12 rounded-full" /> 2
          NOMADEN
        </NavLink>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              <li
                className={`list-none hover:text-brand-accent transition ${textColor}`}
              >
                {link.label}
              </li>
            </NavLink>
          ))}
        </nav>

        {/* Sağ taraf */}
        <div className="flex items-center gap-4">
          <NavLink to="/contact">
            <button
              className={`hidden sm:block px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all ${buttonStyle}`}
            >
              İletişime Geç
            </button>
          </NavLink>

          <button
            onClick={toggleMenu}
            className={`md:hidden transition ${textColor}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? "bg-white" : "bg-brand-background/90"
          } px-6 pt-4 pb-6`}
        >
          <ul
            className={`flex flex-col gap-4 text-sm font-medium ${
              isScrolled ? "text-brand-primary" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <li className="hover:text-brand-accent transition">
                  {link.label}
                </li>
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <li className="mt-4 px-4 py-2 text-center rounded-lg bg-brand-primary text-white shadow hover:bg-brand-primary/90">
                İletişime Geç
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
