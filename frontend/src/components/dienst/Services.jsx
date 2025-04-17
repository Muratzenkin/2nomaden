import { Briefcase, Globe, MessageSquareHeart } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

function Services() {
  const { t } = useTranslation();

  const serviceIcons = [Briefcase, MessageSquareHeart, Globe];
  const serviceList = t("services.list", { returnObjects: true });

  return (
    <>
      <Helmet>
        <title>Hizmetlerimiz | 2 Nomaden</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-brand-primary dark:text-white">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {serviceList.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-left shadow hover:shadow-md transition"
                >
                  <Icon className="w-8 h-8 text-brand-accent mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
