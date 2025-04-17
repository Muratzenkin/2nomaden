import { useTranslation } from "react-i18next";
import Logo from "../../../public/icon/logo.png";

function TermsOfService() {
  const { t } = useTranslation();
  const content = t("terms.content", { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={Logo}
          alt="2 NOMADEN Logo"
          className="w-20 h-20 rounded-full shadow-md"
        />
      </div>

      {/* Başlık */}
      <h1 className="text-3xl font-bold text-center mb-4">
        {t("terms.title")}
      </h1>

      {/* Giriş Paragrafı */}
      <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-10">
        {t("terms.intro")}
      </p>

      {/* İçerik Listesi */}
      <div className="space-y-8">
        {content.map((item, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold text-brand-primary dark:text-brand-accent mb-2">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsOfService;
