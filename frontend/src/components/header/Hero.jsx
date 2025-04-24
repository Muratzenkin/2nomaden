import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Hero() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100vh] bg-gray-100 text-white px-6 py-28 flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Linke Seite Bild  */}
        <div className="flex justify-center">
          <img
            src="/image/insta-profile.png"
            alt="2 NOMADEN"
            className="w-full max-w-md rounded-2xl shadow-xl"
          />
        </div>

        {/* Rechte Seite Text */}
        <div className="text-center md:text-left space-y-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-xl text-gray-400">
            2 NOMADEN <span className="text-indigo-900">{t("hero.title")}</span>
          </h1>
          <p className="text-lg sm:text-xl drop-shadow-md leading-relaxed text-gray-800">
            {t("hero.text1")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button
              className="bg-brand-accent hover:bg-indigo-700 px-8 py-4 rounded-lg font-extrabold text-gray-800 shadow-lg transition duration-300 transform hover:scale-105"
              onClick={() => navigate("/about")}
            >
              {t("hero.title")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
