import { Monitor, Zap, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-indigo-800" />,
      title: t("services2.consulting_title"),
      description: t("services2.consulting_desc"),
    },
    {
      icon: <Zap className="w-10 h-10 text-indigo-800" />,
      title: t("services2.recognition_title"),
      description: t("services2.recognition_desc"),
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-800" />,
      title: t("services2.study_title"),
      description: t("services2.study_desc"),
    },
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <h5 className="text-indigo-900 font-bold uppercase tracking-wide">
          {t("services2.brand")}
        </h5>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          {t("services2.title")}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start space-y-4 hover:shadow-2xl transition"
          >
            <div>{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
