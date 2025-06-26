import { useState, useEffect, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "/icon/logo.png";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { path: "/services", label: t("navbar.services") },
      { path: "/products", label: t("navbar.products") },
      { path: "/about", label: t("navbar.about") },
      { path: "/blog", label: t("navbar.blog") },
    ],
    [t]
  );

  const navbarBg = isScrolled
    ? "bg-white shadow-lg dark:bg-gray-800"
    : "bg-gray-100/80 backdrop-blur-sm"; // Daha soft bir arka plan

  const textColor = isScrolled
    ? "text-gray-800 dark:text-gray-200"
    : "text-gray-800"; // Scroll'dan önce yazılar siyah kalıyor

  const buttonStyle = isScrolled
    ? "bg-blue-600 text-white hover:bg-blue-700"
    : "bg-white text-blue-600 hover:bg-blue-100 border border-blue-300";

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
          <img src={Logo} alt="logo" className="w-12 h-12 rounded-full shadow-md" /> 2
          NOMADEN
        </NavLink>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wide uppercase">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              <li
                className={`list-none hover:text-yellow-300 transition ${textColor}`}
              >
                {link.label}
              </li>
            </NavLink>
          ))}
        </nav>

        {/* Sağ taraf */}
        <div className="flex items-center gap-3">
          {/* Masaüstü Dil Seçici */}
          <div className="hidden sm:flex gap-2 text-sm">
            <button
              onClick={() => i18n.changeLanguage("tr")}
              className="text-gray-400 hover:text-yellow-300"
            >
              🇹🇷
            </button>
            <button
              onClick={() => i18n.changeLanguage("de")}
              className="text-gray-400 hover:text-yellow-300"
            >
              🇩🇪
            </button>
          </div>

          {/* Contact Butonu */}
          <NavLink to="/contact">
            <button
              className={`hidden sm:block px-4 py-2 rounded-lg text-sm font-bold shadow-lg uppercase transition-all ${buttonStyle}`}
            >
              {t("navbar.contact")}
            </button>
          </NavLink>

          {/* Mobil Menü Toggle */}
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
            isScrolled
              ? "bg-white dark:bg-gray-800"
              : "bg-gray-100/80 backdrop-blur-sm"
          } px-6 pt-4 pb-6`}
        >
          <ul
            className={`flex flex-col gap-4 text-sm font-semibold uppercase ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-gray-800"
            }`}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                <li className="hover:text-yellow-300 transition">
                  {link.label}
                </li>
              </NavLink>
            ))}

            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              <li className="mt-4 px-4 py-2 text-center rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700">
                {t("navbar.contact")}
              </li>
            </NavLink>

            {/* Mobil Dil Seçici */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => {
                  i18n.changeLanguage("tr");
                  setIsOpen(false);
                }}
                className="text-sm text-gray-300 hover:text-yellow-300 transition"
              >
                🇹🇷
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage("de");
                  setIsOpen(false);
                }}
                className="text-sm text-gray-300 hover:text-yellow-300 transition"
              >
                🇩🇪
              </button>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;