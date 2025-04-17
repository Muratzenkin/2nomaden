import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Product() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const consultingOptions = [
    {
      id: "starter",
      title: t("product.starter.title"),
      description: t("product.starter.description"),
      price: "€49 / saat",
    },
    {
      id: "pro",
      title: t("product.pro.title"),
      description: t("product.pro.description"),
      price: "€89 / saat",
    },
    {
      id: "custom",
      title: t("product.custom.title"),
      description: t("product.custom.description"),
      price: t("product.custom.price"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ürünlerimiz | 2 Nomaden</title>
      </Helmet>
      <section className="bg-white dark:bg-gray-950 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-brand-primary dark:text-white mb-6">
            {t("product.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            {t("product.subtitle")}
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {consultingOptions.map((option) => (
              <div
                key={option.id}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {option.description}
                </p>
                <p className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-6">
                  {option.price}
                </p>
                <button
                  onClick={() => navigate(`/contact?package=${option.id}`)}
                  className="inline-flex items-center gap-2 bg-brand-accent hover:bg-indigo-700 text-black px-5 py-3 rounded-lg text-sm font-semibold shadow transition"
                >
                  <Mail size={16} /> {t("product.button")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
