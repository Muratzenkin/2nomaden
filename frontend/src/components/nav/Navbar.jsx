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
    { path: "/about", label: "HAKKIMDA" },
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

  const navbarBg = isScrolled ? "bg-[#f1f5f9] shadow-md" : "bg-transparent";
  const textColor = isScrolled ? "text-[#000d6b]" : "text-white";
  const buttonStyle = isScrolled
    ? "bg-white text-[#000d6b] hover:bg-gray-100"
    : "bg-white/20 text-white hover:bg-white/30";

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
          <img src={Logo} alt="logo" className="w-12 h-12 rounded-full" />2
          NOMADEN
        </NavLink>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              <li
                className={`list-none hover:text-[#000d6b] transition ${textColor}`}
              >
                {link.label}
              </li>
            </NavLink>
          ))}
        </nav>

        {/* Sağ taraf */}
        <div className="flex items-center gap-4">
          {/* Buton */}
          <NavLink to="/iletisim">
            <button
              className={`hidden sm:block px-4 py-2 rounded-lg text-sm font-semibold shadow-lg transition-all ${buttonStyle}`}
            >
              İletişime Geç
            </button>
          </NavLink>

          {/* Hamburger Menü */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition ${textColor}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü Paneli */}
      {isOpen && (
        <div
          className={`md:hidden transition-all duration-300 ${
            isScrolled ? "bg-[#f1f5f9]" : "bg-black/80"
          } px-6 pt-4 pb-6`}
        >
          <ul
            className={`flex flex-col gap-4 text-sm font-medium ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <li className="hover:text-[#000d6b] transition">
                  {link.label}
                </li>
              </NavLink>
            ))}
            <NavLink to="/iletisim" onClick={() => setIsOpen(false)}>
              <li className="bg-white mt-4 shadow px-4 py-2 rounded-lg text-center text-[#000d6b]">
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
