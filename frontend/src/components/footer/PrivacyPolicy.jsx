import { useTranslation } from "react-i18next";
import logo from "../../assets/icon/logo.png";

function PrivacyPolicy() {
  const { t } = useTranslation();
  const section = t("privacy.sections", { returnObjects: true });

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-gray-800 dark:text-gray-100">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <img
          src={logo}
          alt="2 NOMADEN Logo"
          className="w-20 h-20 rounded-full shadow-md"
        />
      </div>

      {/* Başlık */}
      <h1 className="text-4xl font-bold text-center mb-4">
        {t("privacy.title")}
      </h1>

      {/* Açıklama */}
      <p className="text-sm sm:text-base text-center text-gray-600 dark:text-gray-400 mb-10">
        {t("privacy.intro")}
      </p>

      {/* Bölümler */}
      <div className="space-y-10">
        {Object.keys(section).map((key) => {
          const item = section[key];

          return (
            <div key={key}>
              <h2 className="text-2xl font-semibold text-brand-primary dark:text-brand-accent mb-2">
                {item.title}
              </h2>
              {Array.isArray(item.items) ? (
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  {item.items.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {item.text}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default PrivacyPolicy;
