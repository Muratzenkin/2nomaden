import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Hakkımızda */}
        <div>
          <h3 className="text-xl font-bold mb-4">2 NOMADEN</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Almanya’da yeni bir hayata başlayan göçmen bir çiftin hikayesi.
            Bilgi, deneyim ve ilham dolu içerikler burada sizi bekliyor.
          </p>
        </div>

        {/* Sayfalar */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sayfalar</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-200 transition">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-200 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 transition">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.instagram.com/2gocebe/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-pink-400"
              >
                <Instagram className="w-5 h-5" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-red-400"
              >
                <Youtube className="w-5 h-5" /> YouTube (yakında)
              </a>
            </li>
          </ul>
        </div>

        {/* Yasal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Yasal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-gray-200 transition"
              >
                Gizlilik Politikası
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-gray-200 transition"
              >
                Kullanım Koşulları
              </Link>
            </li>
            <li>
              <Link to="/imprint" className="hover:text-gray-200 transition">
                İmpressum
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        <hr className="border-gray-700 mb-4" />
        <p>&copy; 2024 2 NOMADEN. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}

export default Footer;
