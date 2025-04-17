import { useTranslation } from "react-i18next";
import Logo from "../../../public/icon/logo.png";

function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-gray-800 dark:text-gray-100">
      {/* Şirket Logosu */}
      <div className="flex justify-center mb-6">
        <img
          src={Logo}
          alt="2 NOMADEN Logo"
          className="w-20 h-20 rounded-full shadow-lg"
        />
      </div>

      {/* Başlık */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("impressum.title")}
      </h1>

      {/* Temel Bilgiler */}
      <div className="space-y-2 text-sm sm:text-base">
        <p>
          <strong>{t("impressum.name")}</strong>
        </p>
        <p>{t("impressum.address")}</p>
        <p>{t("impressum.businessType")}</p>
        <p>
          Email:{" "}
          <a
            href="mailto:2gocebe@gmail.com"
            className="underline text-brand-accent hover:text-indigo-700"
          >
            {t("impressum.email")}
          </a>
        </p>
        <p className="mt-4">{t("impressum.responsible")}</p>
      </div>

      {/* Çizgi */}
      <hr className="my-6 border-gray-300 dark:border-gray-600" />

      {/* Açıklama ve AB Platformu */}
      <div className="text-sm text-gray-600 dark:text-gray-400 space-y-4">
        <p>{t("impressum.disclaimer")}</p>
        <p>
          {t("impressum.legalNotice")}{" "}
          <a
            href={t("impressum.platform")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-brand-accent hover:text-indigo-600"
          >
            {t("impressum.platformLabel")}
          </a>
        </p>
      </div>

      {/* Son güncelleme tarihi */}
      <p className="text-xs text-center text-gray-500 dark:text-gray-500 mt-10">
        {t("impressum.lastUpdated", { date: "Nisan 2025" })}
      </p>
    </div>
  );
}

export default Impressum;
