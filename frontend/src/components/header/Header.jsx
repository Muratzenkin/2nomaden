import { useTranslation } from "react-i18next";
import Navbar from "../nav/Navbar.jsx";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Navbar />
      <div className="h-64 bg-brand-background text-indigo-900 flex flex-col justify-center items-center text-center px-4 pt-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 tracking-wide">
          {t("header.headerWelcome")}{" "}
          <span className="text-brand-accent">{t("header.headerTitle")}</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-400 max-w-xl">
          {t("header.headerText")}
        </p>
      </div>
    </div>
  );
}

export default Header;
