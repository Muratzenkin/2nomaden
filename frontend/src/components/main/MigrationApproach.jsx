import { useTranslation } from "react-i18next";

function MigrationApproach() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-24 relative">
      <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-16 lg:mb-0 relative">
          <div className="absolute inset-0 bg-blue-200 rounded-full w-[90%] h-[90%] mx-auto transform -translate-y-6 -translate-x-6"></div>
          <div className="relative z-10 p-8">
            <h3 className="text-sm font-semibold uppercase text-blue-500 tracking-wide mb-6">
              {t("approach.subtitle")}
            </h3>
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
              {t("approach.title")}
            </h2>
          </div>
        </div>

        <div className="lg:w-1/2 lg:pl-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {t("approach.text")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MigrationApproach;
