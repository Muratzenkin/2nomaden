import { Link } from "react-router-dom";
import { Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Hakkımızda */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t("footer.aboutTitle")}</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            {t("footer.aboutText")}
          </p>
        </div>

        {/* Sayfalar */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.pages")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-200 transition">
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-200 transition">
                {t("footer.blog")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 transition">
                {t("footer.about")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 transition">
                {t("footer.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Sosyal Medya */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.social")}</h4>
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
                <Youtube className="w-5 h-5" /> YouTube (bald)
              </a>
            </li>
          </ul>
        </div>

        {/* Yasal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">{t("footer.legal")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-gray-200 transition"
              >
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link
                to="/terms-of-service"
                className="hover:text-gray-200 transition"
              >
                {t("footer.terms")}
              </Link>
            </li>
            <li>
              <Link to="/impressum" className="hover:text-gray-200 transition">
                {t("footer.impressum")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        <hr className="border-gray-700 mb-4" />
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
