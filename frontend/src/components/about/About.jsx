import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Hakkımızda | 2 Nomaden</title>
      </Helmet>
      <section className="bg-gray-100 dark:bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-gray-800 dark:text-gray-200 space-y-12">
          {/* Başlık */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4 text-brand-primary dark:text-white">
              {t("about.title")}
            </h1>
            <p className="text-md sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t("about.intro")}
            </p>
          </div>

          {/* Bölümler */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-brand-accent">
                {t("about.section1.title")}
              </h2>
              <p className="leading-relaxed">{t("about.section1.text")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-brand-accent">
                {t("about.section2.title")}
              </h2>
              <p className="leading-relaxed">{t("about.section2.text")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-brand-accent">
                {t("about.section3.title")}
              </h2>
              <p className="leading-relaxed">{t("about.section3.text")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-indigo-900 dark:text-brand-accent">
                {t("about.section4.title")}
              </h2>
              <p className="leading-relaxed">{t("about.section4.text")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
